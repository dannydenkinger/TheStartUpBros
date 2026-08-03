"use client";

import { AnimateIn } from "@/components/shared/AnimateIn";
import { CTAButton } from "@/components/shared/CTAButton";
import { MagneticButton } from "@/components/shared/MagneticButton";

export function FinalCTA({ index = "06" }: { index?: string | null }) {
  return (
    <section className="band grain relative">
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
        <AnimateIn>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <span className="badge-pill text-micro-label">
                <span aria-hidden className="label-dot" />
                {index !== null && (
                  <span className="sr-only">{index} · </span>
                )}
                <span className="lowercase">Work With Us</span>
              </span>
            </div>
            <h2 className="col-span-12 lg:col-span-7 text-display mt-6">
              Ready to <span className="accent-word">Build</span>?
            </h2>
            <p className="col-span-12 lg:col-start-9 lg:col-span-4 lg:self-end text-body-lg">
              Book a free strategy call and let&apos;s map out your project,
              tech stack, and launch timeline — zero obligations.
            </p>
            <div className="col-span-12 mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
              <MagneticButton>
                <CTAButton href="/strategy-call" variant="primary">
                  Book Strategy Call
                </CTAButton>
              </MagneticButton>
              <CTAButton href="/portfolio" variant="secondary">
                View Our Work
              </CTAButton>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
