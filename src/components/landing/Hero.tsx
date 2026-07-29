"use client";

import Link from "next/link";
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
          className="flex items-center font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground whitespace-nowrap"
        >
          {i % 4 === 0 && (
            <span aria-hidden className="size-1.5 shrink-0 bg-(--accent-brand) mr-6" />
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

export function Hero() {
  return (
    <section className="bg-background shrink-0 flex flex-col">
      <div className="px-6 md:px-10 pt-6 md:pt-8 pb-8">
        <div className="mx-auto w-full max-w-[1360px]">
          {/* Founder eyebrow */}
          <AnimateIn variant="fadeUp">
            <Link
              href="/strategy-call"
              className="badge-pill mb-6 hover:border-foreground transition-colors"
            >
              <span aria-hidden className="size-1.5 shrink-0 bg-(--accent-brand)" />
              Founded by the Denkinger brothers — taking first clients
            </Link>
          </AnimateIn>

          {/* Headline */}
          <AnimateIn variant="fadeUp" delay={0.06}>
            <div className="grid grid-cols-12 gap-x-6">
              <h1 className="col-span-12 lg:col-span-9 text-display text-foreground">
                Launch-Ready Products,{" "}
                <span className="accent-word">Built In Weeks</span> — Not Months
              </h1>
            </div>
          </AnimateIn>

          {/* Subtitle */}
          <AnimateIn variant="fadeUp" delay={0.12}>
            <p className="text-body-lg mt-5 max-w-[560px]">
              Full-stack design and development for startups that need to
              move&nbsp;now.
            </p>
          </AnimateIn>

          {/* CTAs */}
          <AnimateIn variant="fadeUp" delay={0.18}>
            <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">
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
            <div className="mt-7 max-w-[780px]">
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
      </div>

      {/* Tech-trust ticker */}
      <AnimateIn variant="fadeIn" delay={0.18}>
        <div className="border-t border-border flex items-stretch">
          <p className="hidden md:flex items-center shrink-0 border-r border-border px-6 md:px-10 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground whitespace-nowrap">
            Built on the stack trusted by modern SaaS
          </p>
          <div
            className="flex-1 overflow-hidden py-3.5"
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
      </AnimateIn>
    </section>
  );
}
