"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { CTAButton } from "@/components/shared/CTAButton";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { REVEAL_EASE } from "@/lib/animations";
import {
  audiences,
  buildPostures,
  capabilities,
  getMvpScopePlan,
  launchGoals,
  productTypes,
  serializeMvpScopeAnswers,
  type AudienceId,
  type BuildPostureId,
  type CapabilityId,
  type LaunchGoalId,
  type MvpScopeAnswers,
  type ProductTypeId,
} from "@/lib/mvpScope";

const steps = [
  { eyebrow: "Product", title: "What are you building?" },
  { eyebrow: "Audience", title: "Who uses the first version?" },
  { eyebrow: "Outcome", title: "What must this launch accomplish?" },
  { eyebrow: "Capabilities", title: "What does the product need to do?" },
  { eyebrow: "Approach", title: "How should the first release be shaped?" },
] as const;

type ShareStatus = "copied" | "shared" | "error" | null;

function firstIncompleteStep(answers: MvpScopeAnswers) {
  if (!answers.productType) return 0;
  if (!answers.audience) return 1;
  if (!answers.goal) return 2;
  if (!answers.capabilities.length) return 3;
  if (!answers.posture) return 4;
  return 5;
}

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = value;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  const copied = document.execCommand("copy");
  textArea.remove();
  if (!copied) throw new Error("Copy failed");
}

function ChoiceButton({
  label,
  description,
  selected,
  onClick,
}: {
  label: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.22, ease: REVEAL_EASE }}
      className={`group relative min-h-[126px] rounded-[20px] p-5 text-left transition-[background-color,box-shadow] duration-300 sm:p-6 ${
        selected
          ? "bg-card ring-2 ring-(--accent-brand)"
          : "bg-card hover:bg-(--surface-card-hover)"
      }`}
    >
      <span className="mb-5 flex items-center justify-between gap-4">
        <span className="text-[15px] font-medium text-foreground">{label}</span>
        <span
          aria-hidden="true"
          className={`grid size-5 shrink-0 place-items-center rounded-full border transition-colors duration-200 ${
            selected
              ? "border-(--accent-brand) bg-(--accent-brand) text-white"
              : "border-border text-transparent"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="m2.5 6.2 2.1 2.1 4.9-5"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
      <span className="block max-w-[42ch] text-[13px] leading-relaxed text-muted-foreground">
        {description}
      </span>
    </motion.button>
  );
}

export function MvpScopePlanner({
  initialAnswers,
}: {
  initialAnswers: MvpScopeAnswers;
}) {
  const [answers, setAnswers] = useState(initialAnswers);
  const [step, setStep] = useState(() => firstIncompleteStep(initialAnswers));
  const [showSelectionError, setShowSelectionError] = useState(false);
  const [shareStatus, setShareStatus] = useState<ShareStatus>(null);
  const prefersReducedMotion = useReducedMotion();
  const plan = useMemo(() => getMvpScopePlan(answers), [answers]);
  const query = useMemo(() => serializeMvpScopeAnswers(answers), [answers]);

  useEffect(() => {
    const url = `${window.location.pathname}${query ? `?${query}` : ""}`;
    window.history.replaceState(null, "", url);
  }, [query]);

  const updateSingle = (
    key: "productType" | "audience" | "goal" | "posture",
    value: ProductTypeId | AudienceId | LaunchGoalId | BuildPostureId,
  ) => {
    setAnswers((current) => ({ ...current, [key]: value }));
    setShowSelectionError(false);
  };

  const toggleCapability = (id: CapabilityId) => {
    setAnswers((current) => ({
      ...current,
      capabilities: current.capabilities.includes(id)
        ? current.capabilities.filter((capability) => capability !== id)
        : [...current.capabilities, id],
    }));
    setShowSelectionError(false);
  };

  const canContinue =
    (step === 0 && Boolean(answers.productType)) ||
    (step === 1 && Boolean(answers.audience)) ||
    (step === 2 && Boolean(answers.goal)) ||
    (step === 3 && answers.capabilities.length > 0) ||
    (step === 4 && Boolean(answers.posture));

  const continuePlanner = () => {
    if (!canContinue) {
      setShowSelectionError(true);
      return;
    }
    setShowSelectionError(false);
    setStep((current) => Math.min(5, current + 1));
  };

  const resetPlanner = () => {
    setAnswers({ capabilities: [] });
    setShowSelectionError(false);
    setShareStatus(null);
    setStep(0);
  };

  const sharePlan = async () => {
    if (!plan) return;
    const url = `${window.location.origin}${window.location.pathname}?${query}`;
    const summary = `My StartUpBros MVP plan: ${plan.product.label} for ${plan.audience.label.toLowerCase()}, planned as a ${plan.posture.label.toLowerCase()} release. ${plan.timeline}.`;

    try {
      if (navigator.share) {
        await navigator.share({ title: "My MVP scope plan", text: summary, url });
        setShareStatus("shared");
      } else {
        await copyText(`${summary}\n${url}`);
        setShareStatus("copied");
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      try {
        await copyText(`${summary}\n${url}`);
        setShareStatus("copied");
      } catch {
        setShareStatus("error");
      }
    }

    window.setTimeout(() => setShareStatus(null), 3000);
  };

  const strategyCallHref = `/strategy-call?from=mvp-scope&${query}`;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <section className="px-6 pb-9 pt-12 md:px-10 md:pb-12 md:pt-20">
        <div className="mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(560px,1.22fr)] lg:gap-16">
          <AnimateIn variant="fadeUp">
            <div className="lg:sticky lg:top-28">
              <Link
                href="/tools"
                className="mb-7 flex w-fit text-micro-label text-muted-foreground transition-colors hover:text-foreground"
              >
                Tools / MVP Scope Planner
              </Link>
              <div className="badge-pill text-micro-label mb-6">
                <span aria-hidden className="label-dot" />
                <span className="lowercase">Free planning tool</span>
              </div>
              <h1 className="text-display mb-5 max-w-[740px]">
                Turn your idea into a <span className="accent-word">build plan.</span>
              </h1>
              <p className="text-body-lg max-w-[540px]">
                Make five product decisions. Get a focused first release,
                likely build sequence, planning timeline, and technical starting
                point.
              </p>

              <div className="mt-10 hidden max-w-[520px] border-t border-border pt-6 lg:block">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    ["01", "No signup"],
                    ["02", "Shareable"],
                    ["03", "No pricing"],
                  ].map(([number, label]) => (
                    <div key={number}>
                      <p className="font-mono text-[11px] text-muted-foreground">
                        {number}
                      </p>
                      <p className="mt-1 text-sm font-medium text-foreground">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.08}>
            <div className="min-h-[620px] rounded-[24px] bg-card p-5 sm:p-8 md:p-10">
              <div className="mb-8 flex items-center justify-between gap-6 border-b border-border pb-5">
                <div>
                  <p className="text-micro-label text-muted-foreground">
                    {step < 5 ? `Step ${step + 1} of ${steps.length}` : "Your plan"}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {step < 5 ? steps[step].eyebrow : "Ready to share"}
                  </p>
                </div>
                <div
                  className="flex w-32 gap-1"
                  aria-label={step < 5 ? `${step + 1} of ${steps.length} complete` : "Planner complete"}
                >
                  {steps.map((item, index) => (
                    <span
                      key={item.eyebrow}
                      aria-hidden="true"
                      className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                        index <= step ? "bg-(--accent-brand)" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                {step < 5 ? (
                  <motion.div
                    key={`step-${step}`}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: REVEAL_EASE }}
                  >
                    <p className="text-micro-label text-muted-foreground mb-2">
                      {steps[step].eyebrow}
                    </p>
                    <h2 className="text-h1 mb-7">{steps[step].title}</h2>

                    <div
                      className={`grid grid-cols-1 gap-3 ${
                        step === 3 ? "sm:grid-cols-2" : "md:grid-cols-2"
                      }`}
                    >
                      {step === 0 &&
                        productTypes.map((option) => (
                          <ChoiceButton
                            key={option.id}
                            {...option}
                            selected={answers.productType === option.id}
                            onClick={() => updateSingle("productType", option.id)}
                          />
                        ))}
                      {step === 1 &&
                        audiences.map((option) => (
                          <ChoiceButton
                            key={option.id}
                            {...option}
                            selected={answers.audience === option.id}
                            onClick={() => updateSingle("audience", option.id)}
                          />
                        ))}
                      {step === 2 &&
                        launchGoals.map((option) => (
                          <ChoiceButton
                            key={option.id}
                            {...option}
                            selected={answers.goal === option.id}
                            onClick={() => updateSingle("goal", option.id)}
                          />
                        ))}
                      {step === 3 &&
                        capabilities.map((option) => (
                          <ChoiceButton
                            key={option.id}
                            {...option}
                            selected={answers.capabilities.includes(option.id)}
                            onClick={() => toggleCapability(option.id)}
                          />
                        ))}
                      {step === 4 &&
                        buildPostures.map((option) => (
                          <ChoiceButton
                            key={option.id}
                            {...option}
                            selected={answers.posture === option.id}
                            onClick={() => updateSingle("posture", option.id)}
                          />
                        ))}
                    </div>

                    {step === 3 && (
                      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                        Choose every capability you believe is necessary. The
                        planner will separate the first release from later work.
                      </p>
                    )}

                    {showSelectionError && (
                      <p role="alert" className="mt-4 text-sm text-destructive">
                        {step === 3
                          ? "Select at least one capability to continue."
                          : "Choose one option to continue."}
                      </p>
                    )}

                    <div className="mt-9 flex items-center justify-between gap-4 border-t border-border pt-6">
                      {step > 0 ? (
                        <button
                          type="button"
                          onClick={() => {
                            setShowSelectionError(false);
                            setStep((current) => Math.max(0, current - 1));
                          }}
                          className="min-h-11 rounded-full px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground active:translate-y-px"
                        >
                          Back
                        </button>
                      ) : (
                        <span />
                      )}
                      <button
                        type="button"
                        onClick={continuePlanner}
                        className="btn-pill btn-pill-primary"
                      >
                        {step === 4 ? "Build My Plan" : "Continue"}
                        <span aria-hidden="true" className="btn-arrow">
                          →
                        </span>
                      </button>
                    </div>
                  </motion.div>
                ) : plan ? (
                  <motion.div
                    key="results"
                    aria-live="polite"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.42, ease: REVEAL_EASE }}
                  >
                    <p className="text-micro-label text-muted-foreground mb-2">
                      Recommended v1.0
                    </p>
                    <h2 className="text-h1 max-w-[720px]">
                      A {plan.posture.label.toLowerCase()} {plan.product.label} for{" "}
                      <span className="accent-word">{plan.audience.label.toLowerCase()}.</span>
                    </h2>

                    <div className="my-8 grid grid-cols-1 border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-border">
                      {[
                        ["Planning range", plan.timeline],
                        ["Build effort", plan.timelineDays],
                        ["Launch goal", plan.goal.label],
                      ].map(([label, value]) => (
                        <div key={label} className="py-5 sm:px-5 first:sm:pl-0 last:sm:pr-0">
                          <p className="text-micro-label text-muted-foreground">{label}</p>
                          <p className="mt-2 text-[17px] font-medium text-foreground">{value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 gap-9 lg:grid-cols-2 lg:gap-12">
                      <div>
                        <p className="text-micro-label text-muted-foreground mb-3">
                          Build now
                        </p>
                        <div className="divide-y divide-border border-t border-border">
                          {plan.buildNow.map((capability, index) => (
                            <div key={capability.id} className="flex gap-4 py-3.5">
                              <span className="font-mono text-[11px] text-muted-foreground">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <div>
                                <p className="text-sm font-medium text-foreground">
                                  {capability.label}
                                </p>
                                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                  {capability.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-micro-label text-muted-foreground mb-3">
                          Hold for the next release
                        </p>
                        {plan.buildLater.length ? (
                          <div className="divide-y divide-border border-t border-border">
                            {plan.buildLater.map((capability) => (
                              <div key={capability.id} className="py-3.5">
                                <p className="text-sm font-medium text-foreground">
                                  {capability.label}
                                </p>
                                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                  Useful, but not required to prove the first release.
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="border-t border-border py-4 text-sm leading-relaxed text-muted-foreground">
                            Every selected capability fits the chosen release approach.
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-9 border-t border-border pt-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
                      <div>
                        <p className="text-micro-label text-muted-foreground mb-3">
                          Likely technical starting point
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {plan.stack.map((item) => (
                            <span
                              key={item}
                              className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-foreground"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-micro-label text-muted-foreground mb-3">
                          Decisions to validate
                        </p>
                        <ol className="space-y-3">
                          {[...plan.risks, ...plan.validationQuestions].map((item, index) => (
                            <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                              <span className="font-mono text-[11px] text-foreground">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              {item}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
                      Planning guidance only. Final scope depends on product requirements,
                      integrations, design depth, and launch constraints.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={sharePlan}
                          className="min-h-11 rounded-full border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-foreground active:translate-y-px"
                        >
                          {shareStatus === "copied"
                            ? "Link copied"
                            : shareStatus === "shared"
                              ? "Shared"
                              : shareStatus === "error"
                                ? "Copy failed"
                                : "Share plan"}
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(0)}
                          className="min-h-11 rounded-full px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground active:translate-y-px"
                        >
                          Edit answers
                        </button>
                        <button
                          type="button"
                          onClick={resetPlanner}
                          className="min-h-11 rounded-full px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground active:translate-y-px"
                        >
                          Start over
                        </button>
                      </div>
                      <MagneticButton>
                        <CTAButton href={strategyCallHref} variant="primary">
                          Discuss This Plan
                        </CTAButton>
                      </MagneticButton>
                    </div>
                    <p className="sr-only" aria-live="polite">
                      {shareStatus === "copied"
                        ? "Plan link copied to clipboard."
                        : shareStatus === "shared"
                          ? "Plan shared."
                          : shareStatus === "error"
                            ? "The plan could not be copied."
                            : ""}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="border-t border-border px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <AnimateIn variant="fadeUp">
            <div>
              <p className="text-micro-label text-muted-foreground mb-3">
                How the planner works
              </p>
              <h2 className="text-h1">Scope the promise before the feature list.</h2>
            </div>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.08}>
            <div className="max-w-[760px] space-y-5 text-body-lg">
              <p>
                A useful MVP is the smallest release that proves a specific
                outcome for a specific user. The planner weighs product type,
                audience, launch goal, capabilities, and release posture before
                recommending a sequence.
              </p>
              <p>
                The timeline is a planning range, not a quote. Discovery can
                change it when integrations, compliance, data migration, or
                unusual launch requirements become clear.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
