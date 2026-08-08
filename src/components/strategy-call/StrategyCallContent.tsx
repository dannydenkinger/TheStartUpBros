"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { TechBrandsMarquee } from "@/components/landing/TechBrandsMarquee";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { StatusStrip } from "@/components/shared/StatusStrip";
import { EXIT_EASE, REVEAL_EASE } from "@/lib/animations";
import { createContactPayload, submitContactPayload } from "@/lib/contactForm";
import { trackLead } from "@/lib/analytics";

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

/* The confirmation is the payoff for a five-field form, so it gets the one
 * genuinely choreographed beat on the page: a blurple ring expands and fades
 * out of the badge, the badge springs up from nothing, the tick draws itself,
 * and the two lines of copy rise behind it. ~0.9s end to end, all transform /
 * opacity except the tick's stroke-dashoffset (a one-shot, not a scroll). */
function SuccessMark() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="mx-auto mb-4 flex size-10 items-center justify-center rounded-full bg-(--success-soft) text-(--success)">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M20 6 9 17l-5-5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative mx-auto mb-4 size-10">
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full ring-2 ring-(--accent-brand)"
        initial={{ scale: 0.6, opacity: 0.55 }}
        animate={{ scale: 2.1, opacity: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
      />
      <motion.div
        className="relative flex size-10 items-center justify-center rounded-full bg-(--success-soft) text-(--success)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 480, damping: 22, mass: 0.7 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <motion.path
            d="M20 6 9 17l-5-5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.34, ease: "easeOut", delay: 0.18 }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

type InitialEstimate = {
  featureIds: string[];
  featureLabels: string[];
  totalDays: number;
  tier: string;
};

type InitialScope = {
  productType: string;
  audience: string;
  goal: string;
  posture: string;
  capabilities: string[];
  laterCapabilities: string[];
  timeline: string;
};

export function StrategyCallContent({
  initialEstimate,
  initialScope,
}: {
  initialEstimate?: InitialEstimate;
  initialScope?: InitialScope;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const form = new FormData(e.currentTarget);
    const payload = createContactPayload("StrategyCallContent", form);

    try {
      await submitContactPayload(payload);
      trackLead("StrategyCallContent");
      setSubmitted(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We couldn't send your request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* Focus is a state change, not a scroll frame, so a ring tween is safe —
   * 250ms on the house reveal curve, plus a hairline lift so the active field
   * physically comes forward out of the card. */
  const inputStyles =
    "w-full h-12 rounded-xl border border-input bg-(--surface-input) px-4 text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground focus:ring-2 focus:ring-(--accent-brand-soft) focus:-translate-y-px transition-[color,background-color,border-color,box-shadow,transform] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:focus:translate-y-0";

  /* Label inks from muted to full foreground while its field is focused —
   * the quietest possible "you are here". */
  const labelStyles =
    "block text-caption font-medium mb-2 transition-colors duration-[250ms] group-focus-within:text-foreground motion-reduce:transition-none";

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero — two-column split */}
      <section className="px-6 md:px-10 pt-12 md:pt-20 pb-14 md:pb-24">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* ─── Left: sales narrative ─── */}
            <div className="flex-1">
              <AnimateIn variant="fadeUp">
                <div className="badge-pill text-micro-label mb-7">
                  <span aria-hidden className="label-dot" />
                  <span className="lowercase">
                    Founded by Anthony &amp; Danny Denkinger
                  </span>
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
                <ul className="mb-10 md:mb-12 max-w-[640px]">
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
            <div className="w-full lg:w-[540px] 2xl:w-[620px] shrink-0">
              <AnimateIn variant="fadeUp" delay={0.1}>
                <div className="bg-card rounded-[24px] p-6 sm:p-8">
                  <h2 className="text-h3 mb-2">Book your strategy call</h2>
                  <p className="text-caption mb-7">
                    We&apos;ll reply within 24 hours to schedule.
                  </p>

                  {/* mode="wait" — the form clears out before the
                    * confirmation lands, so the two never overlap inside a
                    * card whose height is changing. */}
                  <AnimatePresence mode="wait" initial={false}>
                  {submitted ? (
                    <motion.div
                      key="done"
                      role="status"
                      aria-live="polite"
                      className="py-14 text-center"
                      {...(!prefersReducedMotion && {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { duration: 0.2 },
                      })}
                    >
                      <SuccessMark />
                      <motion.p
                        className="text-[18px] font-semibold text-foreground"
                        {...(!prefersReducedMotion && {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          transition: {
                            duration: 0.5,
                            ease: REVEAL_EASE,
                            delay: 0.22,
                          },
                        })}
                      >
                        Thank you!
                      </motion.p>
                      <motion.p
                        className="text-[14px] text-muted-foreground mt-1"
                        {...(!prefersReducedMotion && {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          transition: {
                            duration: 0.5,
                            ease: REVEAL_EASE,
                            delay: 0.3,
                          },
                        })}
                      >
                        We&apos;ll be in touch within 24 hours.
                      </motion.p>
                      <motion.span
                        className="inline-block"
                        {...(!prefersReducedMotion && {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          transition: {
                            duration: 0.5,
                            ease: REVEAL_EASE,
                            delay: 0.38,
                          },
                        })}
                      >
                        <Link
                          href="/"
                          className="link-sweep inline-block mt-6 text-[13px] font-medium text-foreground"
                        >
                          Back to Homepage
                        </Link>
                      </motion.span>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      {...(!prefersReducedMotion && {
                        exit: { opacity: 0, y: -8 },
                        transition: { duration: 0.22, ease: EXIT_EASE },
                      })}
                    >
                      <div
                        className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
                        aria-hidden="true"
                      >
                        <label htmlFor="strategy-fax-number">Fax number</label>
                        <input
                          id="strategy-fax-number"
                          name="faxNumber"
                          type="text"
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>
                      {initialEstimate && (
                        <div className="rounded-xl border border-(--accent-brand)/25 bg-(--accent-brand-soft) p-4">
                          <p className="text-sm font-medium text-foreground">
                            Calculator estimate attached
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {initialEstimate.featureLabels.join(", ")} ·{" "}
                            {initialEstimate.totalDays} development days ·{" "}
                            {initialEstimate.tier} complexity
                          </p>
                        </div>
                      )}
                      {initialScope && (
                        <div className="rounded-xl border border-(--accent-brand)/25 bg-(--accent-brand-soft) p-4">
                          <p className="text-sm font-medium text-foreground">
                            MVP scope plan attached
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {initialScope.productType} · {initialScope.audience} ·{" "}
                            {initialScope.timeline} · {initialScope.posture}
                          </p>
                        </div>
                      )}
                      {initialEstimate && (
                        <>
                          <input
                            type="hidden"
                            name="estimateFeatures"
                            value={initialEstimate.featureIds.join(",")}
                          />
                          <input
                            type="hidden"
                            name="estimateDays"
                            value={String(initialEstimate.totalDays)}
                          />
                          <input
                            type="hidden"
                            name="estimateTier"
                            value={initialEstimate.tier}
                          />
                        </>
                      )}
                      {initialScope && (
                        <>
                          <input
                            type="hidden"
                            name="scopeProductType"
                            value={initialScope.productType}
                          />
                          <input
                            type="hidden"
                            name="scopeAudience"
                            value={initialScope.audience}
                          />
                          <input
                            type="hidden"
                            name="scopeGoal"
                            value={initialScope.goal}
                          />
                          <input
                            type="hidden"
                            name="scopePosture"
                            value={initialScope.posture}
                          />
                          <input
                            type="hidden"
                            name="scopeCapabilities"
                            value={initialScope.capabilities.join(", ")}
                          />
                          <input
                            type="hidden"
                            name="scopeLaterCapabilities"
                            value={initialScope.laterCapabilities.join(", ")}
                          />
                          <input
                            type="hidden"
                            name="scopeTimeline"
                            value={initialScope.timeline}
                          />
                        </>
                      )}
                      <div className="group">
                        <label htmlFor="strategy-name" className={labelStyles}>
                          Name
                          <span className="text-(--accent-brand) ml-1">*</span>
                        </label>
                        <input
                          id="strategy-name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          className={inputStyles}
                        />
                      </div>

                      <div className="group">
                        <label htmlFor="strategy-email" className={labelStyles}>
                          Email
                          <span className="text-(--accent-brand) ml-1">*</span>
                        </label>
                        <input
                          id="strategy-email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@company.com"
                          className={inputStyles}
                        />
                      </div>

                      <div className="group">
                        <label htmlFor="strategy-company" className={labelStyles}>
                          Company
                        </label>
                        <input
                          id="strategy-company"
                          name="company"
                          type="text"
                          placeholder="Acme Inc."
                          className={inputStyles}
                        />
                      </div>

                      <div className="group">
                        <label htmlFor="strategy-budget" className={labelStyles}>
                          Budget
                          <span className="text-(--accent-brand) ml-1">*</span>
                        </label>
                        <select
                          id="strategy-budget"
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

                      <div className="group">
                        <label htmlFor="strategy-description" className={labelStyles}>
                          Tell us about your project
                          <span className="text-(--accent-brand) ml-1">*</span>
                        </label>
                        <textarea
                          id="strategy-description"
                          name="description"
                          required
                          rows={4}
                          defaultValue={
                            initialScope
                              ? `I used the MVP Scope Planner. Product: ${initialScope.productType}. Audience: ${initialScope.audience}. Launch goal: ${initialScope.goal}. Build now: ${initialScope.capabilities.join(", ")}. Planning range: ${initialScope.timeline}.`
                              : initialEstimate
                              ? `I used the SaaS Cost Calculator. Selected features: ${initialEstimate.featureLabels.join(", ")}. Estimated scope: ${initialEstimate.totalDays} development days (${initialEstimate.tier} complexity).`
                              : undefined
                          }
                          placeholder="What are you building? What's your timeline?"
                          className="w-full min-h-[120px] rounded-xl border border-input bg-(--surface-input) px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 resize-y focus:outline-none focus:border-foreground focus:ring-2 focus:ring-(--accent-brand-soft) focus:-translate-y-px transition-[color,background-color,border-color,box-shadow,transform] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:focus:translate-y-0"
                        />
                      </div>

                      {/* The label crossfades on a mask rather than swapping,
                        * so the button never blinks between states. */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-pill btn-pill-primary w-full sm:w-fit group disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <span className="grid overflow-hidden [&>*]:col-start-1 [&>*]:row-start-1">
                          <AnimatePresence mode="wait" initial={false}>
                            {isSubmitting ? (
                              <motion.span
                                key="pending"
                                className="flex items-center justify-center gap-2"
                                {...(!prefersReducedMotion && {
                                  initial: { opacity: 0, y: "60%" },
                                  animate: { opacity: 1, y: "0%" },
                                  exit: { opacity: 0, y: "-60%" },
                                  transition: {
                                    duration: 0.18,
                                    ease: REVEAL_EASE,
                                  },
                                })}
                              >
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
                              </motion.span>
                            ) : (
                              <motion.span
                                key="idle"
                                className="flex items-center justify-center gap-2.5"
                                {...(!prefersReducedMotion && {
                                  initial: { opacity: 0, y: "60%" },
                                  animate: { opacity: 1, y: "0%" },
                                  exit: { opacity: 0, y: "-60%" },
                                  transition: {
                                    duration: 0.18,
                                    ease: REVEAL_EASE,
                                  },
                                })}
                              >
                                Book Strategy Call
                                <span aria-hidden className="btn-arrow">
                                  →
                                </span>
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </span>
                      </button>

                      {errorMessage && (
                        <p
                          role="alert"
                          aria-live="assertive"
                          className="text-sm text-red-600 dark:text-red-400"
                        >
                          {errorMessage}
                        </p>
                      )}

                      <p className="text-caption pt-1">
                        No obligations. We&apos;ll reply within 24 hours.
                      </p>
                    </motion.form>
                  )}
                  </AnimatePresence>
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
