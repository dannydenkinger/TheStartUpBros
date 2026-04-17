"use client";

import { AnimateIn } from "@/components/shared/AnimateIn";
import { CTAButton } from "@/components/shared/CTAButton";
import { MagneticButton } from "@/components/shared/MagneticButton";

export function FinalCTA() {
  return (
    <section className="px-6 lg:px-10 py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[760px] text-center">
        <AnimateIn>
          <span className="badge-pill mb-6 inline-block" style={{ borderColor: 'var(--accent-brand-glow)', background: 'var(--accent-brand-soft)' }}>Work With Us</span>
          <h2 className="text-h1 text-foreground">
            Ready to <span style={{ color: 'var(--accent-brand)' }}>Build</span>?
          </h2>
          <p className="text-body-lg mt-5 mb-10">
            Book a free strategy call and let&apos;s map out your project,
            tech stack, and launch timeline — zero obligations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <MagneticButton>
              <CTAButton href="/strategy-call" variant="primary">
                Book Strategy Call
              </CTAButton>
            </MagneticButton>
            <CTAButton href="/portfolio" variant="secondary">
              View Our Work
            </CTAButton>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
