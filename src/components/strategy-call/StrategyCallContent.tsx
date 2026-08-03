"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { TechBrandsMarquee } from "@/components/landing/TechBrandsMarquee";
import { AnimateIn } from "@/components/shared/AnimateIn";
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
  "Kickoff within 48 hours of scope. Typical MVP ships in 2–4 weeks.",
  "Design and development under one roof — no handoff seams between Figma and production.",
  "Start with a trial week. Love the work or walk away — no questions asked.",
];

const stats = [
  { label: "Scope", value: "Within 48 hours" },
  { label: "Design", value: "Usable by week one" },
  { label: "Ship", value: "MVP in 2–4 weeks" },
];

export function StrategyCallContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      source: "StrategyCallContent",
      name: form.get("name"),
      email: form.get("email"),
      company: form.get("company"),
      budget: form.get("budget"),
      description: form.get("description"),
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
  };

  const inputStyles =
    "w-full h-12 rounded-xl border border-input bg-(--surface-input) px-4 text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground focus:ring-2 focus:ring-(--accent-brand-soft) transition-colors duration-200";

  const labelStyles = "block text-caption font-medium mb-2";

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero — two-column split */}
      <section className="px-6 md:px-10 pt-16 md:pt-20 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1360px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* ─── Left: sales narrative ─── */}
            <div className="flex-1">
              <AnimateIn variant="fadeUp">
                <div className="badge-pill mb-7">
                  <span
                    aria-hidden
                    className="size-1.5 shrink-0 rounded-full bg-(--accent-brand)"
                  />
                  <span>Founded by Anthony &amp; Danny Denkinger</span>
                </div>
              </AnimateIn>

              <AnimateIn variant="fadeUp" delay={0.08}>
                <h1 className="text-h1 mb-6">
                  Let&apos;s map out your <span className="accent-word">v1.0</span>
                  <br className="hidden md:block" /> in the next 30 days.
                </h1>
              </AnimateIn>

              <AnimateIn variant="fadeUp" delay={0.16}>
                <p className="text-body-lg max-w-[520px] mb-10">
                  Free 30-minute strategy call. We&apos;ll scope your project,
                  show you relevant work, and map the fastest path to launch —
                  no obligations.
                </p>
              </AnimateIn>

              {/* Bullet points */}
              <AnimateIn variant="fadeUp" delay={0.24}>
                <p className="text-micro-label text-muted-foreground mb-2">
                  What you&apos;ll walk away with
                </p>
                <ul className="mb-12">
                  {bulletPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 py-2.5">
                      <span
                        aria-hidden
                        className="mt-[7px] size-1.5 shrink-0 rounded-full bg-(--accent-brand)"
                      />
                      <span className="text-[14px] text-foreground/85 leading-snug">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </AnimateIn>

              {/* Stats */}
              <AnimateIn variant="fadeUp" delay={0.32}>
                <StatusStrip items={stats} />
              </AnimateIn>
            </div>

            {/* ─── Right: form card ─── */}
            <div className="w-full lg:w-[540px] shrink-0">
              <AnimateIn variant="fadeUp" delay={0.1}>
                <div className="bg-card rounded-[24px] p-8">
                  <h2 className="text-h3 mb-2">Book your strategy call</h2>
                  <p className="text-caption mb-7">
                    We&apos;ll reply within 24 hours to schedule.
                  </p>

                  {submitted ? (
                    <div className="py-14 text-center">
                      <div className="mx-auto mb-4 flex size-10 items-center justify-center rounded-full bg-(--success-soft) text-(--success)">
                        <Check className="w-5 h-5" strokeWidth={2.5} />
                      </div>
                      <p className="text-[18px] font-semibold text-foreground">
                        Thank you!
                      </p>
                      <p className="text-[14px] text-muted-foreground mt-1">
                        We&apos;ll be in touch within 24 hours.
                      </p>
                      <Link
                        href="/"
                        className="link-sweep inline-block mt-6 text-[13px] font-medium text-foreground"
                      >
                        Back to Homepage
                      </Link>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className={labelStyles}>
                          Name
                          <span className="text-(--accent-brand) ml-1">*</span>
                        </label>
                        <input
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          className={inputStyles}
                        />
                      </div>

                      <div>
                        <label className={labelStyles}>
                          Email
                          <span className="text-(--accent-brand) ml-1">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="you@company.com"
                          className={inputStyles}
                        />
                      </div>

                      <div>
                        <label className={labelStyles}>
                          Company
                        </label>
                        <input
                          name="company"
                          type="text"
                          placeholder="Acme Inc."
                          className={inputStyles}
                        />
                      </div>

                      <div>
                        <label className={labelStyles}>
                          Budget
                          <span className="text-(--accent-brand) ml-1">*</span>
                        </label>
                        <select
                          name="budget"
                          required
                          defaultValue=""
                          className={`${inputStyles} appearance-none cursor-pointer invalid:text-muted-foreground/60`}
                        >
                          <option value="" disabled>
                            Select your budget
                          </option>
                          {budgetOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className={labelStyles}>
                          Tell us about your project
                          <span className="text-(--accent-brand) ml-1">*</span>
                        </label>
                        <textarea
                          name="description"
                          required
                          rows={4}
                          placeholder="What are you building? What's your timeline?"
                          className="w-full min-h-[120px] rounded-xl border border-input bg-(--surface-input) px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 resize-y focus:outline-none focus:border-foreground focus:ring-2 focus:ring-(--accent-brand-soft) transition-colors duration-200"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-pill btn-pill-primary w-full group disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg
                              className="animate-spin w-4 h-4"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
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

                      <p className="text-caption text-center pt-1">
                        No obligations. We&apos;ll reply within 24 hours.
                      </p>
                    </form>
                  )}
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by — reuse the site's marquee */}
      <TechBrandsMarquee />
    </div>
  );
}
