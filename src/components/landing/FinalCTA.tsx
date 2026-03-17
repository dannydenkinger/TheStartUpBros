"use client";

import { AnimateIn } from "@/components/shared/AnimateIn";
import { CTAButton } from "@/components/shared/CTAButton";

export function FinalCTA() {
  return (
    <section className="px-6 lg:px-10 py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[680px] text-center">
        <AnimateIn>
          <span className="badge-bricx mb-6 inline-block">Work With Us</span>
          <h2 className="text-h1 text-foreground">
            Design That Moves The Needle
          </h2>
          <p className="text-body-lg mt-5 mb-10">
            Book a free strategy call. We&apos;ll map out your product, timeline,
            and budget — no obligations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <CTAButton href="/contact" variant="primary">
              Book Strategy Call
            </CTAButton>
            <CTAButton href="/portfolio" variant="secondary">
              View Our Work
            </CTAButton>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
