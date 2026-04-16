"use client";

import Link from "next/link";
import { CTAButton } from "@/components/shared/CTAButton";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { MagneticButton } from "@/components/shared/MagneticButton";

// VC backers of companies we've designed for
const vcLogos = [
  "Y Combinator",
  "General Catalyst",
  "Pantera",
  "Accel",
  "Greycroft",
];

function ClutchIcon() {
  return (
    <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-[4px] bg-[#ee3037] shrink-0">
      <span className="text-white text-[10px] font-bold leading-none tracking-tighter">
        C
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
    <section className="bg-background px-6 lg:px-10 pt-[100px] md:pt-[124px] pb-20">
      <div className="mx-auto max-w-[1020px] text-center">
        {/* Clutch rating pill with arrow */}
        <AnimateIn variant="fadeUp">
          <Link
            href="/strategy-call"
            className="inline-flex items-center gap-2 badge-pill mb-10 hover:bg-muted transition-colors"
          >
            <ClutchIcon />
            <span className="text-[13px] font-medium text-foreground">
              Average 4.9/5 Verified Ratings on Clutch
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
            The #1 Rated Fastest Website &amp; UX
            <br className="hidden md:block" />
            Agency For B2B &amp; AI SaaS
          </h1>
        </AnimateIn>

        {/* Subtitle */}
        <AnimateIn variant="fadeUp" delay={0.16}>
          <p className="text-body-lg mt-6 mx-auto max-w-[560px]">
            We design websites &amp; products for fast-moving SaaS companies.
          </p>
        </AnimateIn>

        {/* CTAs */}
        <AnimateIn variant="fadeUp" delay={0.24}>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <MagneticButton>
              <Link
                href="/strategy-call"
                className="btn-pill btn-pill-primary inline-flex items-center gap-2.5 !pl-3"
              >
                <GoogleMeetIcon />
                Book A Call
              </Link>
            </MagneticButton>
            <CTAButton href="/portfolio" variant="secondary">
              See 1000+ Designs Portfolio
            </CTAButton>
          </div>
        </AnimateIn>

        {/* Trust line + VC logos inline */}
        <AnimateIn variant="fadeUp" delay={0.32}>
          <div className="mt-14">
            <p className="text-[13px] text-muted-foreground font-medium mb-6">
              Trusted by 50+ SaaS backed by
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {vcLogos.map((logo) => (
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
