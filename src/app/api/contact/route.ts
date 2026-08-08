import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Contact form endpoint.
 *
 * Accepts JSON from any of the site's forms (BookingForm, StrategyCallContent,
 * ContactFormModal) and emails the submission.
 *
 * Configuration, all via env:
 *   RESEND_API_KEY    required — from resend.com, "Sending access" scope
 *   CONTACT_TO_EMAIL  where leads land (defaults below)
 *   CONTACT_FROM      sender; must be on a domain verified in Resend
 */

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "Thestartupbros1@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM ?? "StartUpBros <leads@startupbros.io>";

/* Labels match src/lib/analytics.ts so a GA4 `generate_lead` row and the email
 * that arrived alongside it name the same surface. */
const SOURCE_LABELS: Record<string, string> = {
  ContactFormModal: "Contact modal",
  BookingForm: "Contact page form",
  StrategyCallContent: "Strategy call page",
};

/** Submissions are pasted into HTML, so anything user-supplied gets escaped —
 *  otherwise a stray `<` mangles the email and a crafted one injects markup. */
function esc(value: unknown): string {
  return String(value ?? "—")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 },
    );
  }

  // Minimal validation — every form sends at least name + email
  if (!body?.name || !body?.email) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields (name, email)" },
      { status: 400 },
    );
  }

  /* Read at request time, not module scope: a missing key would otherwise throw
   * during the build, and the whole route would 500 rather than report why. */
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact-form] RESEND_API_KEY is not set — cannot send", {
      source: body.source ?? "unknown",
      email: body.email,
    });
    return NextResponse.json(
      { ok: false, error: "Email is not configured" },
      { status: 500 },
    );
  }

  const source = String(body.source ?? "unknown");
  const label = SOURCE_LABELS[source] ?? source;

  const rows: [string, unknown][] = [
    ["Name", body.name],
    ["Email", body.email],
    ["Company", body.company],
    ["Website", body.website],
    ["Budget", body.budget],
    ["How they found us", body.referral],
  ];

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px">
      <h2 style="margin:0 0 4px">New enquiry — ${esc(body.name)}</h2>
      <p style="margin:0 0 20px;color:#666;font-size:14px">via ${esc(label)}</p>
      <table cellpadding="0" cellspacing="0" style="width:100%;font-size:14px;border-collapse:collapse">
        ${rows
          .filter(([, v]) => v)
          .map(
            ([k, v]) =>
              `<tr>
                 <td style="padding:8px 12px 8px 0;color:#666;white-space:nowrap;vertical-align:top">${k}</td>
                 <td style="padding:8px 0;font-weight:500">${esc(v)}</td>
               </tr>`,
          )
          .join("")}
      </table>
      ${
        body.description
          ? `<div style="margin-top:20px;padding-top:20px;border-top:1px solid #eee">
               <div style="color:#666;font-size:14px;margin-bottom:6px">Project</div>
               <div style="font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(body.description)}</div>
             </div>`
          : ""
      }
      <p style="margin-top:24px;color:#999;font-size:12px">Reply to this email to respond directly.</p>
    </div>`;

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New enquiry — ${String(body.name)} (${label})`,
      /* Hitting reply in the inbox goes to the prospect, not to us. The domain
       * has no MX records, so a reply to FROM_EMAIL would bounce. */
      replyTo: String(body.email),
      html,
    });

    if (error) {
      console.error("[contact-form] Resend rejected the send", error);
      return NextResponse.json(
        { ok: false, error: "Could not send message" },
        { status: 502 },
      );
    }

    console.log("[contact-form] sent", { id: data?.id, source, to: TO_EMAIL });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact-form] send threw", err);
    return NextResponse.json(
      { ok: false, error: "Could not send message" },
      { status: 502 },
    );
  }
}
