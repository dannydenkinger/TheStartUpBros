"use client";

import { CTAButton } from "@/components/shared/CTAButton";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { MagneticButton } from "@/components/shared/MagneticButton";

export function Hero() {
  return (
    <section className="bg-background px-6 lg:px-10 pt-[120px] md:pt-[156px] pb-14">
      <div className="mx-auto max-w-[800px] text-center">
        <AnimateIn variant="fadeUp">
          <span className="badge-pill mb-8">
            Website & UX Design Partners For AI SaaS &rarr;
          </span>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.08}>
          <h1 className="text-display text-foreground">
            Build Lean. Launch Fast.
            <br className="hidden sm:block" />
            Scale Smart.
          </h1>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.16}>
          <p className="text-body-lg mt-6 mx-auto">
            The one-stop shop for AI-powered MVPs. We deliver 90% solutions in record time, eliminating the overhead of full-scale hiring so you can focus on the market.
          </p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.24}>
          <div className="mt-8 flex items-center justify-center">
            <MagneticButton>
              <CTAButton href="/strategy-call" variant="primary">
                Book a Consultation
              </CTAButton>
            </MagneticButton>
          </div>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.32}>
          <p className="mt-8 text-[13px] text-[#999] font-medium tracking-wide">
            Trusted by 50+ SaaS backed by leading VCs
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
