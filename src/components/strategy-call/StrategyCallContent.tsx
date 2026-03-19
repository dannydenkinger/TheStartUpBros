"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];

const bulletPoints = [
  "Senior developers lead projects, guided by co-founder & CTO Brady Bender.",
  "50+ SaaS products for startups, teams & enterprises across 30+ industries.",
  "4.9/5 on Clutch with a 99.7% client satisfaction rate.",
  "Fastest turnaround in the space. Most projects kick off in 48 hours.",
  "Start with a trial week. Love the work or walk away. Simple as that.",
];

const stats = [
  { icon: "📁", value: "50+", label: "Projects" },
  { icon: "📊", value: "30+", label: "Industries" },
  { icon: "❤️", value: "99.7%", label: "Client Satisfaction" },
];

const logos = [
  "Writesonic",
  "Sybill",
  "Itv.ai",
  "CAMB.AI",
  "Kearney",
  "Podqi",
  "Hobbes",
  "Gigamind",
];

export function StrategyCallContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const inputStyles =
    "w-full h-[46px] px-4 rounded-lg border border-border bg-secondary text-[14px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all";

  return (
    <div className="min-h-screen -mt-[80px] pt-[80px]" style={{ background: "radial-gradient(circle, #e0e0e0 1px, transparent 1px)", backgroundSize: "24px 24px", backgroundColor: "#f4f4f5" }}>
      {/* Main two-column section */}
      <section className="px-6 lg:px-10 pt-12 lg:pt-20 pb-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* ─── Left Column ─── */}
            <div className="flex-1 pt-4">
              {/* Clutch badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="text-[10px] font-bold tracking-[0.08em] uppercase text-muted-foreground">
                  Reviewed on
                </div>
                <span className="text-[16px] font-bold text-foreground tracking-tight">
                  Clutch
                </span>
                <div className="flex items-center gap-0.5 ml-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 text-orange-400 fill-orange-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-[11px] font-semibold text-muted-foreground ml-1">
                    5.0 RATING
                  </span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-[36px] lg:text-[44px] font-bold text-foreground leading-[1.1] tracking-[-0.03em] mb-5">
                Try The #1 Rated SaaS
                <br />
                Dev Team For 1 Week.
                <br />
                Zero Risk.
              </h1>

              <p className="text-[15px] text-muted-foreground leading-relaxed mb-10 max-w-[480px]">
                No long-term contracts. No lock-in. Just great development work
                you can test in a week.
              </p>

              {/* Bullet points */}
              <ul className="space-y-4 mb-12">
                {bulletPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-[22px] h-[22px] rounded-full bg-green-500 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[14px] text-foreground/80 leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="flex items-start gap-10">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <span className="text-2xl block mb-1">{stat.icon}</span>
                    <p className="text-[26px] font-bold text-foreground leading-none">
                      {stat.value}
                    </p>
                    <p className="text-[12px] text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ─── Right Column: Form Card ─── */}
            <div className="w-full lg:w-[420px] shrink-0">
              <div className="bg-card rounded-2xl shadow-xl shadow-black/8 border border-border p-8">
                <h2 className="text-[20px] font-semibold text-foreground leading-tight mb-8">
                  See what Startup Bros can do
                  <br />
                  for your product in 7 days.
                </h2>

                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-7 h-7 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
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
                      <label className="block text-[13px] font-semibold text-foreground mb-1.5">
                        Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="you@domain.com"
                        className={inputStyles}
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-foreground mb-1.5">
                        Company Name
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="company"
                        type="text"
                        required
                        placeholder="Acme Inc."
                        className={inputStyles}
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-foreground mb-1.5">
                        Website<span className="text-red-500">*</span>
                      </label>
                      <input
                        name="website"
                        type="text"
                        required
                        placeholder="www.acme.com"
                        className={inputStyles}
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-foreground mb-1.5">
                        Budget<span className="text-red-500">*</span>
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
                      <label className="block text-[13px] font-semibold text-foreground mb-1.5">
                        Tell us about your project
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="description"
                        required
                        rows={4}
                        placeholder="Tell us about your product"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-[14px] text-foreground placeholder:text-muted-foreground/50 resize-y focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-foreground mb-1.5">
                        How did you find us?
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="referral"
                        type="text"
                        required
                        placeholder="Google, referral, social media..."
                        className={inputStyles}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-[50px] rounded-full bg-[#1e1e20] text-white text-[15px] font-medium hover:bg-black disabled:opacity-60 disabled:cursor-not-allowed transition-colors cursor-pointer"
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
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by section */}
      <section className="px-6 lg:px-10 pb-12">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[14px] font-semibold text-foreground mb-6">
            Trusted by Leading Companies
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-[14px] font-semibold text-muted-foreground/60 tracking-wide"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="px-6 lg:px-10 py-6 border-t border-border/40">
        <div className="mx-auto max-w-[1100px] flex justify-end">
          <p className="text-[12px] text-muted-foreground">
            Startup Bros © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
