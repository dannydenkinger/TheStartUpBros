"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Briefcase, Layers, Heart } from "lucide-react";
import { TechBrandsMarquee } from "@/components/landing/TechBrandsMarquee";
import { AnimateIn } from "@/components/shared/AnimateIn";

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];

const bulletPoints = [
  "Senior developers lead every project, guided by co-founders & CEOs Anthony and Danny Denkinger.",
  "50+ shipped products across 30+ industries — from AI tools to SaaS platforms to mobile apps.",
  "4.9/5 on Clutch with a 99.7% client satisfaction rate.",
  "Most projects kick off within 48 hours. Typical MVP ships in 2–4 weeks.",
  "Start with a trial week. Love the work or walk away — no questions asked.",
];

const stats = [
  { icon: Briefcase, value: "50+", label: "Projects shipped" },
  { icon: Layers, value: "30+", label: "Industries" },
  { icon: Heart, value: "99.7%", label: "Client satisfaction" },
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
    "w-full h-[50px] px-4 rounded-lg border border-border bg-secondary text-[15px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-foreground/30 transition-all";

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero — two-column split */}
      <section className="px-6 lg:px-10 pt-[120px] pb-16 md:pb-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* ─── Left: sales narrative ─── */}
            <div className="flex-1">
              {/* Clutch rating pill */}
              <AnimateIn variant="fadeUp">
                <div className="inline-flex items-center gap-2 badge-pill mb-7">
                  <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
                    Reviewed on
                  </span>
                  <span className="text-[13px] font-bold text-foreground tracking-tight">
                    Clutch
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="#facc15"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-foreground ml-1">
                    5.0
                  </span>
                </div>
              </AnimateIn>

              <AnimateIn variant="fadeUp" delay={0.08}>
                <h1 className="text-[40px] md:text-[56px] font-medium text-foreground leading-[1.05] tracking-[-0.03em] mb-6">
                  Let&apos;s map out your v1.0
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
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-5">
                  What you&apos;ll walk away with
                </p>
                <ul className="space-y-3.5 mb-12">
                  {bulletPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 w-[22px] h-[22px] rounded-full bg-muted flex items-center justify-center shrink-0 border border-border">
                        <Check
                          className="w-3 h-3 text-emerald-400"
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-[14px] text-foreground/85 leading-snug">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </AnimateIn>

              {/* Stats */}
              <AnimateIn variant="fadeUp" delay={0.32}>
                <div className="grid grid-cols-3 gap-6 max-w-[500px]">
                  {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label}>
                        <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center mb-3">
                          <Icon
                            className="w-4 h-4 text-foreground"
                            strokeWidth={1.8}
                          />
                        </div>
                        <p className="text-[26px] font-semibold text-foreground leading-none tracking-tight">
                          {stat.value}
                        </p>
                        <p className="text-[12px] text-muted-foreground mt-1.5">
                          {stat.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </AnimateIn>
            </div>

            {/* ─── Right: form card ─── */}
            <div className="w-full lg:w-[540px] shrink-0">
              <AnimateIn variant="fadeUp" delay={0.1}>
                <div className="rounded-2xl border border-border bg-card p-8 shadow-lg shadow-black/5">
                  <h2 className="text-[24px] font-semibold text-foreground leading-tight mb-2 tracking-tight">
                    Book your strategy call
                  </h2>
                  <p className="text-[15px] text-muted-foreground mb-7">
                    We&apos;ll reply within 24 hours to schedule.
                  </p>

                  {submitted ? (
                    <div className="py-14 text-center">
                      <div className="w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center mx-auto mb-4">
                        <Check
                          className="w-7 h-7 text-emerald-400"
                          strokeWidth={2.5}
                        />
                      </div>
                      <p className="text-[18px] font-semibold text-foreground">
                        Thank you!
                      </p>
                      <p className="text-[14px] text-muted-foreground mt-1">
                        We&apos;ll be in touch within 24 hours.
                      </p>
                      <Link
                        href="/"
                        className="inline-block mt-6 text-[13px] font-medium text-foreground underline underline-offset-2 hover:text-muted-foreground transition-colors"
                      >
                        Back to Homepage
                      </Link>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-[14px] font-semibold text-foreground mb-2">
                          Name
                          <span className="text-muted-foreground ml-1">*</span>
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
                        <label className="block text-[14px] font-semibold text-foreground mb-2">
                          Email
                          <span className="text-muted-foreground ml-1">*</span>
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
                        <label className="block text-[14px] font-semibold text-foreground mb-2">
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
                        <label className="block text-[14px] font-semibold text-foreground mb-2">
                          Budget
                          <span className="text-muted-foreground ml-1">*</span>
                        </label>
                        <select
                          name="budget"
                          required
                          defaultValue=""
                          className={`${inputStyles} appearance-none cursor-pointer`}
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
                        <label className="block text-[14px] font-semibold text-foreground mb-2">
                          Tell us about your project
                          <span className="text-muted-foreground ml-1">*</span>
                        </label>
                        <textarea
                          name="description"
                          required
                          rows={4}
                          placeholder="What are you building? What's your timeline?"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-[15px] text-foreground placeholder:text-muted-foreground/50 resize-y focus:outline-none focus:ring-2 focus:ring-ring focus:border-foreground/30 transition-all"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-pill btn-pill-primary w-full !py-3 disabled:opacity-60 disabled:cursor-not-allowed"
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
                          "Book Strategy Call"
                        )}
                      </button>

                      <p className="text-[12px] text-muted-foreground text-center pt-1">
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
