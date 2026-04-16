"use client";

import { useState, useEffect, useRef } from "react";
import { X, Check } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

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
      <div className="relative w-full max-w-[960px] bg-popover rounded-2xl shadow-2xl shadow-black/20 overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-200/80 hover:bg-neutral-300 flex items-center justify-center transition-colors z-10"
        >
          <X className="w-4 h-4 text-neutral-500" />
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* ─── Left Column: Persuasive Copy ─── */}
          <div className="flex-1 px-8 lg:px-10 py-10 lg:py-12">
            {/* Headline */}
            <h2 className="text-[28px] lg:text-[32px] font-bold text-foreground leading-[1.15] tracking-[-0.02em] mb-6">
              Try The #1 Rated SaaS
              <br />
              Dev Team For 1 Week.
              <br />
              Zero Risk.
            </h2>

            <p className="text-[14px] text-muted-foreground leading-relaxed mb-8">
              No long-term contracts. No lock-in. Just great development work you can test in a week.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3.5 mb-10">
              {bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[13px] text-foreground leading-snug">{point}</span>
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="flex items-center gap-6 pt-6 border-t border-border">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <span className="text-xl mb-1 block">{stat.icon}</span>
                  <p className="text-[22px] font-bold text-foreground">{stat.value}</p>
                  <p className="text-[11px] text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right Column: Contact Form ─── */}
          <div className="w-full lg:w-[420px] bg-secondary px-8 py-10 lg:py-12 lg:px-8 border-l border-border/50 shrink-0">
            <h3 className="text-[20px] font-semibold text-foreground leading-tight mb-8">
              See what Startup Bros can do for your product in 7 days.
            </h3>

            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[18px] font-semibold text-foreground">Thank you!</p>
                <p className="text-[14px] text-muted-foreground mt-1">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-[13px] font-semibold text-foreground mb-1.5">
                    Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="you@domain.com"
                    className="w-full h-[44px] px-4 rounded-lg border border-border bg-secondary text-[14px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-[13px] font-semibold text-foreground mb-1.5">
                    Company Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    name="company"
                    type="text"
                    required
                    placeholder="Acme Inc."
                    className="w-full h-[44px] px-4 rounded-lg border border-border bg-secondary text-[14px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all"
                  />
                </div>

                {/* Website */}
                <div>
                  <label className="block text-[13px] font-semibold text-foreground mb-1.5">
                    Website<span className="text-red-500">*</span>
                  </label>
                  <input
                    name="website"
                    type="url"
                    required
                    placeholder="www.acme.com"
                    className="w-full h-[44px] px-4 rounded-lg border border-border bg-secondary text-[14px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-[13px] font-semibold text-foreground mb-1.5">
                    Budget<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="budget"
                    required
                    defaultValue=""
                    className="w-full h-[44px] px-4 rounded-lg border border-border bg-secondary text-[14px] text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all"
                  >
                    <option value="" disabled>Select your budget</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Project description */}
                <div>
                  <label className="block text-[13px] font-semibold text-foreground mb-1.5">
                    Tell us about your project<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={3}
                    placeholder="Tell us about your product"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-[14px] text-foreground placeholder:text-muted-foreground/50 resize-y focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all"
                  />
                </div>

                {/* How did you find us */}
                <div>
                  <label className="block text-[13px] font-semibold text-foreground mb-1.5">
                    How did you find us?<span className="text-red-500">*</span>
                  </label>
                  <input
                    name="referral"
                    type="text"
                    required
                    placeholder="Google, referral, social media..."
                    className="w-full h-[44px] px-4 rounded-lg border border-border bg-secondary text-[14px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-[48px] rounded-full bg-[#1e1e20] text-white text-[15px] font-medium hover:bg-black disabled:opacity-60 disabled:cursor-not-allowed transition-colors cursor-pointer"
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
                    "Book Strategy Call"
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
