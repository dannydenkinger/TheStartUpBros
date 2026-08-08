/**
 * GA4 event helpers.
 *
 * Every call is a no-op unless gtag is on the page, which is the normal state
 * in dev and on preview deploys — see the gate in src/app/layout.tsx. Callers
 * never need to guard.
 */

/** Which form produced a lead. Mirrors the `source` each form already posts to
 *  /api/contact, so GA4 and the inbox can be reconciled without a lookup. */
export type LeadSource =
  | "ContactFormModal"
  | "BookingForm"
  | "StrategyCallContent";

/** Human-readable names for the GA4 reports — "Contact modal" reads better in
 *  a table than "ContactFormModal", and the raw value stays available too. */
const LEAD_LABELS: Record<LeadSource, string> = {
  ContactFormModal: "Contact modal",
  BookingForm: "Contact page form",
  StrategyCallContent: "Strategy call page",
};

/**
 * Fire on a *confirmed* lead — after the endpoint returns ok, never on optimistic
 * UI. Firing before delivery succeeds would overstate conversions.
 *
 * `generate_lead` is a GA4 recommended event name, which is what lets it be
 * marked as a key event and show up in the standard reports rather than
 * needing a custom definition.
 */
export function trackLead(source: LeadSource) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "generate_lead", {
    form_location: LEAD_LABELS[source],
    form_source: source,
    /* Which page the lead came from. Named lead_page, NOT page_path — that
     * name is reserved in GA4 and a custom value under it is silently dropped
     * (verified: the beacon transmitted ep.page_path=null). The modal opens
     * over any route without changing the URL, so this is what answers "which
     * pages actually produce leads". */
    lead_page: window.location.pathname,
  });
}
