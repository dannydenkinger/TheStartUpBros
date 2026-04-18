"use client";

import Link from "next/link";
import { CTAButton } from "@/components/shared/CTAButton";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { MagneticButton } from "@/components/shared/MagneticButton";

const techStackLogos = [
  "Next.js",
  "Stripe",
  "Vercel",
  "OpenAI",
  "Supabase",
  "Tailwind",
];

function StudioIcon() {
  return (
    <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-[4px] shrink-0" style={{ background: 'var(--accent-brand)' }}>
      <span className="text-white text-[10px] font-bold leading-none tracking-tighter">
        SB
      </span>
    </span>
  );
}

function GoogleMeetIcon() {
  return (
    <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-[4px] bg-white shrink-0 shadow-sm">
      <svg width="12" height="12" viewBox="0 0 48 48" fill="none">
        <path d="M31 24l8 6.5v-13L31 24z" fill="#00832d" />
        <path d="M9 14v20a4 4 0 004 4h18V10H13a4 4 0 00-4 4z" fill="#0066da" />
        <path d="M31 10v14l8 6.5V14a4 4 0 00-4-4h-4z" fill="#e94235" />
        <path d="M31 38h4a4 4 0 004-4v-3.5L31 24v14z" fill="#ffba00" />
        <path d="M39 17.5L31 24l8 6.5v-13z" fill="#00ac47" />
      </svg>
    </span>
  );
}

export function Hero() {
  return (
    <section className="bg-background px-6 lg:px-10 pt-[60px] md:pt-[84px] pb-12 flex-1 flex flex-col justify-center">
      <div className="mx-auto max-w-[1020px] text-center">
        {/* Founder pill */}
        <AnimateIn variant="fadeUp">
          <Link
            href="/strategy-call"
            className="inline-flex items-center gap-2 badge-pill mb-10 hover:bg-muted transition-colors"
          >
            <StudioIcon />
            <span className="text-[13px] font-medium text-foreground">
              Founded by the Denkinger brothers — taking first clients
            </span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground/70"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </AnimateIn>

        {/* Headline */}
        <AnimateIn variant="fadeUp" delay={0.08}>
          <h1 className="text-display text-foreground">
            Websites and products for{" "}
            <span style={{ color: 'var(--accent-brand)' }}>fast-moving</span>
            <br className="hidden md:block" />
            B2B and AI SaaS teams
          </h1>
        </AnimateIn>

        {/* Subtitle */}
        <AnimateIn variant="fadeUp" delay={0.16}>
          <p className="text-body-lg mt-6 mx-auto max-w-[560px]">
            Two brothers. Modern stack. Built to ship in weeks, not months.
          </p>
        </AnimateIn>

        {/* CTAs */}
        <AnimateIn variant="fadeUp" delay={0.24}>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <MagneticButton>
              <Link
                href="/strategy-call"
                className="btn-pill btn-pill-primary inline-flex items-center gap-2.5 !pl-3"
                style={{ boxShadow: '0 0 20px var(--accent-brand-glow), 0 0 60px var(--accent-brand-soft)' }}
              >
                <GoogleMeetIcon />
                Book A Call
              </Link>
            </MagneticButton>
            <CTAButton href="/portfolio" variant="secondary">
              See Design Gallery
            </CTAButton>
          </div>
        </AnimateIn>

        {/* Trust line + VC logos inline */}
        <AnimateIn variant="fadeUp" delay={0.32}>
          <div className="mt-14">
            <p className="text-[13px] text-muted-foreground font-medium mb-6">
              Built on the stack trusted by modern SaaS
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {techStackLogos.map((logo) => (
                <span
                  key={logo}
                  className="text-[15px] font-semibold text-muted-foreground/70 tracking-tight"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
