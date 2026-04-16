import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * Accepts JSON from any of the site's forms (BookingForm, StrategyCallContent,
 * ContactFormModal). Currently logs the submission — swap the log for
 * Resend/Formspree/your API of choice to go live.
 *
 * To wire up Resend:
 *   1. Install `resend` and add RESEND_API_KEY to env
 *   2. Replace the console.log block with an await resend.emails.send(...)
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Minimal validation — every form sends at least name + email
    if (!body?.name || !body?.email) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields (name, email)" },
        { status: 400 },
      );
    }

    // TODO: swap for Resend / Formspree / CRM webhook / whatever
    console.log("[contact-form] submission received", {
      source: body.source ?? "unknown",
      name: body.name,
      email: body.email,
      company: body.company,
      budget: body.budget,
      description: body.description,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 },
    );
  }
}
