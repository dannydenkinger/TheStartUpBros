const MAX_BODY_BYTES = 32_000;
const DELIVERY_TIMEOUT_MS = 8_000;

const fieldLimits = {
  source: 80,
  name: 120,
  email: 254,
  company: 160,
  website: 500,
  budget: 80,
  description: 5_000,
  referral: 500,
  landingPage: 1_000,
  sourcePage: 1_000,
  referrer: 1_000,
  utmSource: 200,
  utmMedium: 200,
  utmCampaign: 300,
  utmTerm: 300,
  utmContent: 300,
  faxNumber: 200,
} as const;

type ContactField = keyof typeof fieldLimits;
type ContactSubmission = Partial<Record<ContactField, string>>;

function json(data: Record<string, unknown>, status = 200) {
  return Response.json(data, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function cleanSubmission(value: unknown): ContactSubmission | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;

  const record = value as Record<string, unknown>;
  const submission: ContactSubmission = {};

  for (const [field, limit] of Object.entries(fieldLimits) as Array<
    [ContactField, number]
  >) {
    const rawValue = record[field];
    if (rawValue === undefined || rawValue === null) continue;
    if (typeof rawValue !== "string") return null;

    const normalized = rawValue.trim();
    if (normalized.length > limit) return null;
    if (normalized) submission[field] = normalized;
  }

  return submission;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function deliverSubmission(
  submission: ContactSubmission,
  requestId: string,
  receivedAt: string,
) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("Contact delivery is not configured");
  }

  const url = new URL(webhookUrl);
  if (process.env.NODE_ENV === "production" && url.protocol !== "https:") {
    throw new Error("Contact delivery must use HTTPS in production");
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "User-Agent": "StartUpBros-Contact/1.0",
  };

  if (process.env.CONTACT_WEBHOOK_BEARER_TOKEN) {
    headers.Authorization = `Bearer ${process.env.CONTACT_WEBHOOK_BEARER_TOKEN}`;
  }
  if (process.env.CONTACT_WEBHOOK_SECRET) {
    headers["X-Contact-Webhook-Secret"] = process.env.CONTACT_WEBHOOK_SECRET;
  }

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      schemaVersion: 1,
      requestId,
      receivedAt,
      ...submission,
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(DELIVERY_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Contact webhook returned ${response.status}`);
  }
}

export async function POST(request: Request) {
  const requestId = crypto.randomUUID();

  try {
    if (!request.headers.get("content-type")?.includes("application/json")) {
      return json({ ok: false, error: "Expected a JSON request", requestId }, 415);
    }

    const declaredLength = Number(request.headers.get("content-length") ?? 0);
    if (declaredLength > MAX_BODY_BYTES) {
      return json({ ok: false, error: "Request is too large", requestId }, 413);
    }

    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return json({ ok: false, error: "Request is too large", requestId }, 413);
    }

    let parsedBody: unknown;
    try {
      parsedBody = JSON.parse(rawBody);
    } catch {
      return json({ ok: false, error: "Invalid request", requestId }, 400);
    }

    const submission = cleanSubmission(parsedBody);
    if (!submission) {
      return json({ ok: false, error: "Invalid contact fields", requestId }, 400);
    }

    if (!submission.name || !submission.email) {
      return json(
        { ok: false, error: "Name and email are required", requestId },
        400,
      );
    }

    if (!isValidEmail(submission.email)) {
      return json({ ok: false, error: "Enter a valid email address", requestId }, 400);
    }

    // Quietly accept honeypot submissions without sending them downstream.
    if (submission.faxNumber) {
      console.info("[contact-form] blocked automated submission", { requestId });
      return json({ ok: true, requestId });
    }

    const receivedAt = new Date().toISOString();
    await deliverSubmission(submission, requestId, receivedAt);

    console.info("[contact-form] delivered", {
      requestId,
      source: submission.source ?? "unknown",
      receivedAt,
    });

    return json({ ok: true, requestId });
  } catch (error) {
    console.error("[contact-form] delivery failed", {
      requestId,
      message: error instanceof Error ? error.message : "Unknown error",
    });

    return json(
      {
        ok: false,
        error: "We couldn't send your request right now. Please try again.",
        requestId,
      },
      503,
    );
  }
}
