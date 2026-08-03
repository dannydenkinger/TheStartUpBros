"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CTAButton } from "@/components/shared/CTAButton";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { StatusStrip } from "@/components/shared/StatusStrip";

const techStack = [
  "Next.js",
  "Stripe",
  "Vercel",
  "OpenAI",
  "Supabase",
  "Tailwind",
];

// Ticker needs enough width for a seamless -50% loop
const tickerItems = [...techStack, ...techStack];

function TickerRow() {
  return (
    <div className="flex items-center shrink-0">
      {tickerItems.map((name, i) => (
        <span
          key={`${name}-${i}`}
          className="flex items-center text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground whitespace-nowrap"
        >
          {i % 4 === 0 && (
            <span
              aria-hidden
              className="size-1.5 shrink-0 rounded-full bg-(--accent-brand) mr-6"
            />
          )}
          {name}
          <span aria-hidden className="mx-6">
            —
          </span>
        </span>
      ))}
    </div>
  );
}

/* Pure-CSS gradient ribbon — a giant blurred ring centered far left of the
 * screen so its right-hand arc reads as a near-vertical luminous band on the
 * right third, plus a faint second arc over the headline and soft radial
 * washes. Layered under .grain. */
function RibbonArt({ animate }: { animate: boolean }) {
  // All rings share this geometry: circle centered at (5% W, 85% H),
  // radius 75% of screen width — the visible arc enters the top edge around
  // x 55%, bows right to ~x 80% near the bottom: a diagonal curved sweep.
  const ring =
    "absolute left-[5%] top-[85%] aspect-square w-[150%] rounded-full";

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className={cn("absolute inset-0", animate && "animate-hero-float")}>
        {/* Ambient wash behind the ribbon's upper reach */}
        <div
          className="absolute -top-[22%] right-[4%] h-[70%] w-[36%] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(61,43,255,0.24), transparent 74%)",
            filter: "blur(90px)",
          }}
        />
        {/* Ribbon — outer soft band */}
        <div
          className={ring}
          style={{
            border: "140px solid rgba(70,52,255,0.45)",
            filter: "blur(90px)",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Ribbon — main band */}
        <div
          className={ring}
          style={{
            border: "90px solid rgba(99,84,255,0.95)",
            filter: "blur(62px)",
            transform: "translate(-50%, -50%) scale(0.99)",
          }}
        />
        {/* Ribbon — luminous core */}
        <div
          className={ring}
          style={{
            border: "26px solid rgba(186,178,255,1)",
            filter: "blur(60px)",
            transform: "translate(-50%, -50%) scale(0.982)",
          }}
        />
        {/* Faint second arc sweeping over the headline zone */}
        <div
          className="absolute left-[10%] top-[-70%] aspect-square w-[130%] rounded-full"
          style={{
            border: "70px solid rgba(91,77,255,0.22)",
            filter: "blur(80px)",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Counter-glow where the ribbon exits, bottom right */}
        <div
          className="absolute -bottom-[30%] right-[-10%] h-[70%] w-[38%] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(91,77,255,0.3), transparent 72%)",
            filter: "blur(90px)",
          }}
        />
      </div>
    </div>
  );
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="px-6 md:px-10 pt-4 md:pt-5 flex flex-col">
      <div className="mx-auto w-full max-w-[1360px]">
        {/* The hero screen — dark inset card on the light page */}
        <div className="band grain relative flex flex-col overflow-hidden rounded-[24px] shadow-[0_24px_80px_-24px_rgba(14,14,16,0.4)] md:min-h-[min(calc(100vh-116px),860px)]">
          <RibbonArt animate={!prefersReducedMotion} />

          {/* Screen content */}
          <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-16 sm:px-10 md:px-14 md:py-20">
            {/* Founder eyebrow */}
            <AnimateIn variant="fadeUp">
              <div>
                <Link
                  href="/strategy-call"
                  className="badge-pill mb-7 hover:border-white/40 transition-colors"
                >
                  <span
                    aria-hidden
                    className="size-1.5 shrink-0 rounded-full bg-(--accent-brand)"
                  />
                  Founded by the Denkinger brothers — taking first clients
                </Link>
              </div>
            </AnimateIn>

            {/* Headline — two-tone */}
            <AnimateIn variant="fadeUp" delay={0.06}>
              <h1 className="text-display max-w-[960px]">
                Launch-Ready Products,{" "}
                <span className="accent-word">Built In Weeks</span>
                <span className="text-foreground/45 whitespace-nowrap">
                  {" "}
                  — Not Months
                </span>
              </h1>
            </AnimateIn>

            {/* Subtitle */}
            <AnimateIn variant="fadeUp" delay={0.12}>
              <p className="text-body-lg mt-6 max-w-[560px]">
                Full-stack design and development for startups that need to
                move&nbsp;now.
              </p>
            </AnimateIn>

            {/* CTAs */}
            <AnimateIn variant="fadeUp" delay={0.18}>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
                <MagneticButton>
                  <CTAButton href="/strategy-call" variant="primary">
                    Book A Call
                  </CTAButton>
                </MagneticButton>
                <CTAButton href="/portfolio" variant="secondary">
                  See Design Gallery
                </CTAButton>
              </div>
            </AnimateIn>

            {/* Status line */}
            <AnimateIn variant="fadeUp" delay={0.18}>
              <div className="mt-9 max-w-[820px]">
                <StatusStrip
                  items={[
                    { label: "Scope", value: "Within 48 hours" },
                    { label: "Design", value: "Usable by week one" },
                    { label: "Ship", value: "MVP in 2–4 weeks" },
                  ]}
                />
              </div>
            </AnimateIn>
          </div>

          {/* Tech-trust ticker — screen's bottom edge.
           * No AnimateIn here: at the bottom of a viewport-height screen it
           * would sit outside useInView's -80px margin and never fade in. */}
          <div className="relative z-10 border-t border-border flex items-stretch">
            <p className="hidden md:flex items-center shrink-0 border-r border-border px-6 md:px-10 py-4 text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground whitespace-nowrap">
              Built on the stack trusted by modern SaaS
            </p>
            <div
              className="flex-1 overflow-hidden py-4"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              }}
            >
              <div className="flex w-max animate-marquee [--duration:40s]">
                <TickerRow />
                <TickerRow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
