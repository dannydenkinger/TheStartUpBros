"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { CTAButton } from "@/components/shared/CTAButton";
import { REVEAL_EASE } from "@/lib/animations";
import {
  ShieldCheck,
  Brain,
  Database,
  CreditCard,
  LayoutDashboard,
  HardDrive,
  Mail,
  BarChart3,
  Check,
  RotateCcw,
  Share2,
} from "lucide-react";
import {
  getSaasEstimate,
  saasFeatures,
  serializeSaasFeatureIds,
  type SaasFeatureId,
} from "@/lib/saasEstimate";

const featureIcons: Record<
  SaasFeatureId,
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  auth: ShieldCheck,
  ai: Brain,
  database: Database,
  payments: CreditCard,
  admin: LayoutDashboard,
  storage: HardDrive,
  email: Mail,
  analytics: BarChart3,
};

type ShareStatus = "copied" | "shared" | "error" | null;

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

/* Tweens the running total from wherever it currently sits to the new value
 * instead of restarting at zero — the point of the number is the delta a
 * feature adds, so the eye has to be able to follow it. rAF + easeOutCubic,
 * 0.5s; under reduced motion the value just updates. */
function TweenNumber({ value }: { value: number }) {
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);

  useEffect(() => {
    if (prefersReducedMotion) {
      fromRef.current = value;
      const rafId = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(rafId);
    }
    const from = fromRef.current;
    if (from === value) return;

    const start = performance.now();
    const duration = 500;
    let rafId: number;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = Math.round(from + (value - from) * eased);
      fromRef.current = next;
      setDisplay(next);
      if (t < 1) rafId = requestAnimationFrame(tick);
      else fromRef.current = value;
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [value, prefersReducedMotion]);

  return <>{display}</>;
}

export function SaaSCostCalculator({
  initialFeatureIds = [],
}: {
  initialFeatureIds?: SaasFeatureId[];
}) {
  const [selected, setSelected] = useState<Set<SaasFeatureId>>(
    () => new Set(initialFeatureIds),
  );
  const [shareStatus, setShareStatus] = useState<ShareStatus>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const serialized = serializeSaasFeatureIds(selected);
    const params = new URLSearchParams(window.location.search);

    if (serialized) params.set("features", serialized);
    else params.delete("features");

    const query = params.toString();
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`,
    );
  }, [selected]);

  const toggle = (id: SaasFeatureId) => {
    setShareStatus(null);
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const { selectedFeatures, totalDays, tier } = getSaasEstimate(selected);
  const serializedFeatures = serializeSaasFeatureIds(selected);
  const strategyCallHref = `/strategy-call?from=saas-cost&features=${encodeURIComponent(serializedFeatures)}`;

  const Wrapper = prefersReducedMotion ? "div" : motion.div;

  const shareEstimate = async () => {
    const url = new URL(window.location.href);
    url.searchParams.set("features", serializedFeatures);

    const featureList = selectedFeatures.map((feature) => feature.label).join(", ");
    const summary = `StartUpBros MVP estimate: ${featureList}. ${totalDays} development days, ${tier.label.toLowerCase()} complexity.`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "My StartUpBros MVP estimate",
          text: summary,
          url: url.toString(),
        });
        setShareStatus("shared");
      } else {
        await copyText(`${summary}\n${url.toString()}`);
        setShareStatus("copied");
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;

      try {
        await copyText(`${summary}\n${url.toString()}`);
        setShareStatus("copied");
      } catch {
        setShareStatus("error");
      }
    }

    window.setTimeout(() => setShareStatus(null), 3000);
  };

  const resetEstimate = () => {
    setShareStatus(null);
    setSelected(new Set());
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="px-6 md:px-10 pt-12 md:pt-20 pb-8 md:pb-12">
        <div className="mx-auto max-w-[1600px]">
          <AnimateIn variant="fadeUp">
            <div className="badge-pill text-micro-label mb-6">
              <span aria-hidden className="label-dot" />
              <span className="lowercase">Free Tool</span>
            </div>
            <h1 className="text-display mb-4">
              SaaS Cost <span className="accent-word">Calculator</span>
            </h1>
            <p className="text-body-lg max-w-[600px]">
              Toggle the features your MVP needs. We&apos;ll estimate the
              scope, timeline, and complexity tier.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1600px]">
          {/* Feature Toggle Grid */}
          <AnimateIn variant="fadeUp" className="mb-8 md:mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {saasFeatures.map((feature) => {
                const isOn = selected.has(feature.id);
                const Icon = featureIcons[feature.id];

                return (
                  /* The card is the switch, so it has to feel like one:
                   * press dips it to 0.985, release springs it back, the ring
                   * fades up (never a width/box-shadow tween on scroll — this
                   * only ever runs on click), and the status dot pops from
                   * scale 0 with a short spring so the "on" state lands with
                   * a tick rather than a dissolve. */
                  <motion.button
                    key={feature.id}
                    onClick={() => toggle(feature.id)}
                    aria-pressed={isOn}
                    whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
                    transition={{ duration: 0.25, ease: [0.44, 0, 0.56, 1] }}
                    className={`relative w-full h-full text-left rounded-[20px] p-6 transition-[background-color,box-shadow] duration-300 cursor-pointer select-none ${
                      isOn
                        ? "bg-white dark:bg-[#1c1c1c] ring-2 ring-(--accent-brand)"
                        : "bg-card hover:bg-(--surface-card-hover)"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                      <span className="flex items-center gap-2">
                        <span
                          aria-hidden
                          className="relative grid size-1.5 shrink-0 place-items-center"
                        >
                          <span className="absolute inset-0 rounded-full bg-foreground/15" />
                          <motion.span
                            className="absolute inset-0 rounded-full bg-(--accent-brand)"
                            initial={false}
                            animate={{
                              scale: isOn ? 1 : 0,
                              opacity: isOn ? 1 : 0,
                            }}
                            transition={
                              prefersReducedMotion
                                ? { duration: 0 }
                                : {
                                    type: "spring",
                                    stiffness: 620,
                                    damping: 26,
                                    mass: 0.5,
                                  }
                            }
                          />
                        </span>
                        <span className="text-xs tabular-nums text-muted-foreground">
                          +{feature.days} days
                        </span>
                      </span>
                    </div>
                    <p className="text-[15px] font-medium text-foreground mb-1">
                      {feature.label}
                    </p>
                    <p className="text-[12px] text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </AnimateIn>

          {/* Results Card */}
          <AnimatePresence mode="wait">
            {selected.size === 0 ? (
              <Wrapper
                key="empty"
                {...(!prefersReducedMotion && {
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -8 },
                  transition: { duration: 0.3, ease: REVEAL_EASE },
                })}
                aria-live="polite"
                className="card-elevated p-6 sm:p-8 md:p-10"
              >
                <p className="text-micro-label text-muted-foreground mb-3">
                  Estimated Scope
                </p>
                <div className="py-3 border-b border-border/60">
                  <span className="text-sm text-muted-foreground">
                    Select features to estimate
                  </span>
                </div>
                <div className="flex items-baseline gap-3 pt-5">
                  <span className="text-[4rem] font-medium leading-none tracking-[-0.02em] tabular-nums text-foreground/30">
                    0
                  </span>
                  <span className="text-xs text-muted-foreground">
                    dev days
                  </span>
                </div>
              </Wrapper>
            ) : (
              <Wrapper
                key="results"
                {...(!prefersReducedMotion && {
                  layout: true,
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -8 },
                  transition: { duration: 0.3, ease: REVEAL_EASE },
                })}
                aria-live="polite"
                className="card-elevated p-6 sm:p-8 md:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                  <div className="lg:col-span-7">
                    <p className="text-micro-label text-muted-foreground mb-3">
                      Estimated Scope
                    </p>
                    {/* Line items slide in from the left and collapse out;
                      * `layout` keeps the survivors gliding to their new rows
                      * (transform only) so the ledger never jump-cuts. */}
                    <div>
                      <AnimatePresence initial={false} mode="popLayout">
                        {selectedFeatures.map((f) => (
                          <motion.div
                            key={f.id}
                            {...(!prefersReducedMotion && {
                              layout: true,
                              initial: { opacity: 0, x: -12 },
                              animate: { opacity: 1, x: 0 },
                              exit: { opacity: 0, x: -12 },
                              transition: {
                                duration: 0.28,
                                ease: [0.22, 1, 0.36, 1],
                              },
                            })}
                            className="flex items-baseline justify-between gap-6 py-3 border-b border-border/60"
                          >
                            <span className="text-sm text-muted-foreground">
                              {f.label}
                            </span>
                            <span className="text-[15px] font-medium text-foreground tabular-nums">
                              {f.days} days
                            </span>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                    <div className="flex items-baseline gap-3 pt-5">
                      <span className="text-[4rem] font-medium leading-none tracking-[-0.02em] tabular-nums text-foreground">
                        <TweenNumber value={totalDays} />
                      </span>
                      <span className="text-xs text-muted-foreground">
                        dev days
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-10">
                    <p className="text-micro-label text-muted-foreground mb-3">
                      Complexity Tier
                    </p>
                    {/* Crossing a tier boundary is the one moment the tool
                      * changes its verdict, so the word rises in behind a mask
                      * instead of just re-rendering.
                      *
                      * Keyed remount rather than AnimatePresence on purpose:
                      * an exit animation leaves the mask empty for a frame,
                      * the inline-block collapses, and the blurple dot next to
                      * it — baseline-aligned — visibly drops. */}
                    <p className="flex items-baseline gap-3 text-[2.5rem] font-medium leading-none tracking-[-0.02em] text-foreground mb-3">
                      <span className="inline-block overflow-hidden pb-1 -mb-1">
                        <motion.span
                          key={tier.label}
                          className="inline-block"
                          {...(!prefersReducedMotion && {
                            initial: { y: "105%" },
                            animate: { y: "0%" },
                            transition: {
                              duration: 0.42,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          })}
                        >
                          {tier.label}
                        </motion.span>
                      </span>
                      <span
                        aria-hidden
                        className="size-2.5 shrink-0 rounded-full bg-(--accent-brand)"
                      />
                    </p>
                    <motion.p
                      key={tier.label}
                      className="text-[14px] text-muted-foreground max-w-[300px]"
                      {...(!prefersReducedMotion && {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { duration: 0.3, delay: 0.08 },
                      })}
                    >
                      {tier.description}
                    </motion.p>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={shareEstimate}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:border-foreground"
                      >
                        {shareStatus === "copied" || shareStatus === "shared" ? (
                          <Check className="size-4" aria-hidden />
                        ) : (
                          <Share2 className="size-4" aria-hidden />
                        )}
                        {shareStatus === "copied"
                          ? "Link copied"
                          : shareStatus === "shared"
                            ? "Shared"
                            : shareStatus === "error"
                              ? "Copy failed"
                              : "Share estimate"}
                      </button>
                      <button
                        type="button"
                        onClick={resetEstimate}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        <RotateCcw className="size-4" aria-hidden />
                        Reset
                      </button>
                    </div>
                    <p className="sr-only" aria-live="polite">
                      {shareStatus === "copied"
                        ? "Estimate link copied to clipboard."
                        : shareStatus === "shared"
                          ? "Estimate shared."
                          : shareStatus === "error"
                            ? "The estimate could not be copied."
                            : ""}
                    </p>
                  </div>
                </div>

                <p className="mt-7 text-xs leading-relaxed text-muted-foreground">
                  Planning estimate only. Final timing depends on product requirements,
                  integrations, and launch readiness.
                </p>

                <div className="mt-10 pt-6 border-t border-border flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                  <p className="text-body-lg">
                    Want an exact quote and timeline for your build?
                  </p>
                  <MagneticButton className="max-md:w-full">
                    <CTAButton
                      href={strategyCallHref}
                      variant="primary"
                      className="max-md:w-full max-md:h-auto max-md:min-h-12 max-md:whitespace-normal max-md:text-center max-md:py-2.5"
                    >
                      Discuss This Estimate
                    </CTAButton>
                  </MagneticButton>
                </div>
              </Wrapper>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
