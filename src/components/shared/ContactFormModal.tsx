"use client";

import { useState, useEffect, useRef } from "react";
import { X, Check } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";
import { StatusStrip } from "@/components/shared/StatusStrip";

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];

const bulletPoints = [
  "Founded by Anthony & Danny Denkinger — you work directly with us, not account managers.",
  "Modern stack: Next.js, Supabase, Stripe, OpenAI — what fast-moving SaaS is actually built on.",
  "Most projects kick off within 48 hours of scope. Typical MVP ships in 2–4 weeks.",
  "Design and development under one roof — no handoff seams between Figma and production.",
  "Start with a trial week. Love the work or walk away. Simple as that.",
];

const stats = [
  { label: "Scope", value: "Within 48 hours" },
  { label: "Design", value: "Usable by week one" },
  { label: "Ship", value: "MVP in 2–4 weeks" },
];

const inputStyles =
  "w-full h-12 rounded-xl border border-input bg-(--surface-input) px-4 text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground focus:ring-2 focus:ring-(--accent-brand-soft) transition-colors duration-200";

const labelStyles = "block text-caption font-medium mb-2";

export function ContactFormModal() {
  const { isOpen, closeModal } = useContactModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) closeModal();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      source: "ContactFormModal",
      name: form.get("name"),
      email: form.get("email"),
      company: form.get("company"),
      website: form.get("website"),
      budget: form.get("budget"),
      description: form.get("description"),
      referral: form.get("referral"),
    };

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // fail silently — dev scaffold, real handling comes with real endpoint
    }

    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      closeModal();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-[960px] max-h-[90vh] overflow-y-auto bg-card rounded-[24px] animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 lg:top-5 lg:right-5 flex size-11 lg:size-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors z-10"
        >
          <X className="w-4 h-4" strokeWidth={1.5} />
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* ─── Left Column: Persuasive Copy ─── */}
          <div className="flex-1 px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">
            {/* Headline */}
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.12] tracking-[-0.025em] font-medium text-foreground mb-6 max-lg:pr-10">
              Try Our SaaS Dev Team
              <br />
              For One Week.
              <br />
              Zero Risk.
            </h2>

            <p className="text-caption leading-relaxed mb-8">
              No long-term contracts. No lock-in. Just great development work you can test in a week.
            </p>

            {/* Bullet points */}
            <ul className="mb-10">
              {bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 py-2.5">
                  <span
                    aria-hidden
                    className="mt-[6px] size-1.5 shrink-0 rounded-full bg-(--accent-brand)"
                  />
                  <span className="text-[13px] text-foreground leading-snug">{point}</span>
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <StatusStrip items={stats} />
          </div>

          {/* ─── Right Column: Contact Form ─── */}
          <div className="w-full lg:w-[420px] px-6 sm:px-8 py-8 sm:py-10 lg:py-12 lg:px-8 border-t lg:border-t-0 lg:border-l border-border shrink-0">
            <h3 className="text-h3 mb-8">
              See what Startup Bros can do for your product in 7 days.
            </h3>

            {submitted ? (
              <div className="py-16 text-center">
                <div className="mx-auto mb-4 flex size-10 items-center justify-center rounded-full bg-(--success-soft) text-(--success)">
                  <Check className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <p className="text-[18px] font-semibold text-foreground">Thank you!</p>
                <p className="text-[14px] text-muted-foreground mt-1">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className={labelStyles}>
                    Name<span className="text-(--accent-brand) ml-1">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputStyles}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={labelStyles}>
                    Email<span className="text-(--accent-brand) ml-1">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@domain.com"
                    className={inputStyles}
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className={labelStyles}>
                    Company Name<span className="text-(--accent-brand) ml-1">*</span>
                  </label>
                  <input
                    name="company"
                    type="text"
                    required
                    placeholder="Acme Inc."
                    className={inputStyles}
                  />
                </div>

                {/* Website */}
                <div>
                  <label className={labelStyles}>
                    Website<span className="text-(--accent-brand) ml-1">*</span>
                  </label>
                  <input
                    name="website"
                    type="url"
                    required
                    placeholder="www.acme.com"
                    className={inputStyles}
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className={labelStyles}>
                    Budget<span className="text-(--accent-brand) ml-1">*</span>
                  </label>
                  <select
                    name="budget"
                    required
                    defaultValue=""
                    className={`${inputStyles} appearance-none cursor-pointer invalid:text-muted-foreground/60`}
                  >
                    <option value="" disabled>Select your budget</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Project description */}
                <div>
                  <label className={labelStyles}>
                    Tell us about your project<span className="text-(--accent-brand) ml-1">*</span>
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={3}
                    placeholder="Tell us about your product"
                    className="w-full min-h-[96px] rounded-xl border border-input bg-(--surface-input) px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 resize-y focus:outline-none focus:border-foreground focus:ring-2 focus:ring-(--accent-brand-soft) transition-colors duration-200"
                  />
                </div>

                {/* How did you find us */}
                <div>
                  <label className={labelStyles}>
                    How did you find us?<span className="text-(--accent-brand) ml-1">*</span>
                  </label>
                  <input
                    name="referral"
                    type="text"
                    required
                    placeholder="Google, referral, social media..."
                    className={inputStyles}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-pill btn-pill-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <>
                      Book Strategy Call
                      <span aria-hidden className="btn-arrow">
                        →
                      </span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
