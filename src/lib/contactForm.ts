import { getContactAttribution } from "@/lib/contactAttribution";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
// Web3Forms form IDs are public by design and safe in browser code.
const WEB3FORMS_FORM_ID = "b9f0f4f4-db68-4333-ba0e-863994268eb3";

const sourceLabels: Record<string, string> = {
  ContactFormModal: "Contact modal",
  BookingForm: "Contact page form",
  StrategyCallContent: "Strategy call page",
};

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
  body?: { message?: string };
};

function singleLine(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export function createContactPayload(source: string, form: FormData) {
  const payload: Record<string, string | undefined> = {
    source,
    ...getContactAttribution(),
  };

  for (const [key, value] of form.entries()) {
    if (typeof value === "string") payload[key] = value;
  }

  return payload;
}

export async function submitContactPayload(
  payload: Record<string, string | undefined>,
) {
  // Quietly accept the hidden honeypot without creating a provider submission.
  if (payload.faxNumber) return { ok: true };

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  if (!name || !email) {
    throw new Error("Name and email are required.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Enter a valid email address.");
  }

  const source = payload.source ?? "unknown";
  const sourceLabel = sourceLabels[source] ?? source;

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_FORM_ID,
      subject: `New StartUpBros inquiry — ${singleLine(name)} (${singleLine(sourceLabel)})`,
      from_name: "StartUpBros Website",
      name,
      email,
      message: payload.description ?? "No project description provided.",
      Company: payload.company,
      Website: payload.website,
      Budget: payload.budget,
      "How they found us": payload.referral,
      "Form source": sourceLabel,
      "Source page": payload.sourcePage,
      "Landing page": payload.landingPage,
      Referrer: payload.referrer,
      "UTM source": payload.utmSource,
      "UTM medium": payload.utmMedium,
      "UTM campaign": payload.utmCampaign,
      "UTM term": payload.utmTerm,
      "UTM content": payload.utmContent,
      "Estimate features": payload.estimateFeatures,
      "Estimate days": payload.estimateDays,
      "Estimate tier": payload.estimateTier,
      "Scope product type": payload.scopeProductType,
      "Scope audience": payload.scopeAudience,
      "Scope launch goal": payload.scopeGoal,
      "Scope release approach": payload.scopePosture,
      "Scope build now": payload.scopeCapabilities,
      "Scope build later": payload.scopeLaterCapabilities,
      "Scope timeline": payload.scopeTimeline,
    }),
  });

  const result = (await response.json().catch(() => ({}))) as Web3FormsResponse;

  if (!response.ok || result.success !== true) {
    throw new Error(
      result.message ??
        result.body?.message ??
        "We couldn't send your request. Please try again.",
    );
  }

  return { ok: true };
}
