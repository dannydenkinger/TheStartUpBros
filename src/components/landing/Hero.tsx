"use client";
import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { REVEAL_EASE } from "@/lib/animations";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { RevealText } from "@/components/shared/RevealText";
import { ClientLogos } from "@/components/landing/ClientLogos";
import { SilkFieldB } from "@/components/landing/SilkFieldB";

const statusItems = [
  { label: "Scope", value: "Within 48 hours" },
  { label: "Design", value: "Usable by week one" },
  { label: "Ship", value: "MVP in 2–4 weeks" },
];

/* Hero entrances run off MOUNT, not whileInView — the hero is above the fold,
 * so a scroll-triggered reveal would be a lie. One ladder, one easing, so the
 * screen assembles in a deliberate order instead of arriving all at once. */

function Rise({
  children,
  delay = 0,
  y = 22,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: REVEAL_EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const ribbonY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  /* Hover choreography is transform-based, so it has to be switched off in JS
   * (a `motion-reduce:` utility can't cancel a `translate`/`scale` utility). */
  const hoverSwap = prefersReducedMotion
    ? ""
    : "transition-transform duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)]";
  return (
    <section ref={sectionRef} className="-mt-[80px] flex flex-col">
      {/* The hero screen — full-bleed dark card, rounded bottom corners so it
       * reads as a dark card ending on the light page. Starts at viewport top
       * behind the floating pill nav. */}
      <div className="band grain relative flex min-h-svh flex-col overflow-hidden rounded-b-[2rem]">
        {/* Silk field — WebGL. Owns its own cursor interaction, so there is no
         * wrapper-level pointer drift here. Oversized so the scroll parallax
         * can never expose an edge. */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-[10%] left-0 h-[120%] w-full"
          style={prefersReducedMotion ? undefined : { y: ribbonY }}
        >
          <SilkFieldB className="absolute inset-0 h-full w-full" />
        </motion.div>
        {/* Legibility scrim — the field is brightest on the left, which is
         * where the headline sits. Darkens copy-side only; the violet keeps
         * its full intensity on the right. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent"
        />
        {/* Screen content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-6 pt-28 pb-12 md:px-10 md:pt-32">
          {/* Founder eyebrow — borderless dot label */}
          <Rise>
            <div>
              <Link
                href="/strategy-call"
                className="mb-8 inline-flex items-center gap-2 text-[13px] text-neutral-400 transition-colors hover:text-white"
              >
                <span
                  aria-hidden
                  className="size-1.5 shrink-0 rounded-full bg-(--accent-brand)"
                />
                Founded by the Denkinger brothers — taking first clients
              </Link>
            </div>
          </Rise>
          {/* Headline — white base, one muted-gray inline emphasis */}
          <h1 className="text-display max-w-[880px]">
            <RevealText delay={0.06}>Launch-Ready Products,</RevealText>
            <RevealText delay={0.14}>Built In Weeks</RevealText>
            <RevealText delay={0.22}>
              <span className="text-white/55">— Not Months</span>
            </RevealText>
          </h1>
          {/* Subtitle */}
          <Rise delay={0.3}>
            <p className="mt-10 max-w-[36rem] text-base leading-relaxed text-white/85">
              Full-stack design and development for startups that need to
              move&nbsp;now.
            </p>
          </Rise>
          {/* CTAs — one white capsule + one plain text link */}
          <Rise delay={0.38}>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <MagneticButton>
                <Link
                  href="/strategy-call"
                  className={cn(
                    "group inline-flex h-12 items-center gap-3 rounded-full bg-white pl-1.5 pr-6 text-sm font-medium text-neutral-900 shadow-lg",
                    !prefersReducedMotion &&
                      "transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:scale-[1.02]",
                  )}
                >
                  {/* Arrow swap — the resting arrow exits right while a second
                   * one enters from the left, so the capsule reads as "go". */}
                  <span className="grid size-9 place-items-center overflow-hidden rounded-full bg-(--accent-brand) text-white">
                    <ArrowRight
                      className={cn(
                        "col-start-1 row-start-1 size-4",
                        hoverSwap,
                        !prefersReducedMotion &&
                          "group-hover:translate-x-[170%]",
                      )}
                      strokeWidth={2}
                    />
                    {!prefersReducedMotion && (
                      <ArrowRight
                        aria-hidden
                        className={cn(
                          "col-start-1 row-start-1 size-4 -translate-x-[170%] group-hover:translate-x-0",
                          hoverSwap,
                        )}
                        strokeWidth={2}
                      />
                    )}
                  </span>
                  Book A Call
                </Link>
              </MagneticButton>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white"
              >
                See Design Gallery
                <span
                  aria-hidden
                  className={cn(
                    !prefersReducedMotion &&
                      "transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:translate-x-1",
                  )}
                >
                  →
                </span>
              </Link>
            </div>
          </Rise>
        </div>
        {/* Bottom block — status line + logo row, pinned near the hero's
         * bottom edge. These run off the same mount ladder as the headline
         * (a whileInView reveal would never fire here: at the bottom of a
         * viewport-height screen it sits outside useInView's -80px margin). */}
        <div className="relative z-10 w-full px-6 pb-12 md:px-12">
          {/* Status line — borderless dot items, wiping in left to right */}
          <div className="mb-10 flex flex-wrap items-center gap-x-8 gap-y-2">
            {statusItems.map((item, i) => (
              <Rise key={item.label} delay={0.46 + i * 0.06} y={14}>
                <span className="inline-flex items-center gap-2.5 text-[13px] text-neutral-400 whitespace-nowrap">
                  <span
                    aria-hidden
                    className="size-1 shrink-0 rounded-full bg-(--accent-brand)"
                  />
                  {item.label} — {item.value}
                </span>
              </Rise>
            ))}
          </div>
          {/* Inspired-by tape — the one logo strip on the landing page.
           * Fades rather than rises: it is already in horizontal motion. */}
          <Rise delay={0.62} y={0}>
            <ClientLogos />
          </Rise>
        </div>
      </div>
    </section>
  );
}
