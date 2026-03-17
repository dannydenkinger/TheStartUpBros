"use client";

import { CTAButton } from "@/components/shared/CTAButton";
import { AnimateIn } from "@/components/shared/AnimateIn";

export function Hero() {
  return (
    <section className="bg-[#f9f9f9] px-6 lg:px-10 pt-[120px] md:pt-[156px] pb-14">
      <div className="mx-auto max-w-[800px] text-center">
        <AnimateIn variant="fadeUp">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e0e0e0] bg-white px-4 py-2 text-[13px] font-medium text-[#242424] shadow-sm mb-8">
            Website & UX Design Partners For AI SaaS &rarr;
          </span>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.08}>
          <h1 className="text-display text-foreground">
            Website &amp; UX Design Partners
            <br className="hidden sm:block" />
            For AI SaaS
          </h1>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.16}>
          <p className="text-body-lg mt-6 mx-auto !text-[#787878]">
            We design websites &amp; products for fast-moving SaaS companies.
          </p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.24}>
          <div className="mt-8 flex items-center justify-center">
            <CTAButton href="https://bricxlabs.com/strategy-call" variant="primary">
              Try Bricx for 1 Week
            </CTAButton>
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
