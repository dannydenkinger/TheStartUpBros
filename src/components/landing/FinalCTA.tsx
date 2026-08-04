"use client";

import { AnimateIn } from "@/components/shared/AnimateIn";
import { RevealText } from "@/components/shared/RevealText";
import { CTAButton } from "@/components/shared/CTAButton";
import { MagneticButton } from "@/components/shared/MagneticButton";

/* The page's last beat. Everything above this fades in as a block; the close
 * gets a real ladder — label, then the headline wiping up out of its own clip
 * (the same masked reveal the hero opens with, so the page bookends itself),
 * then the paragraph, then the buttons. ~0.9s end to end. */
export function FinalCTA({ index = "06" }: { index?: string | null }) {
  return (
    <section className="band grain relative">
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <AnimateIn className="col-span-12">
            <span className="badge-pill text-micro-label">
              <span aria-hidden className="label-dot" />
              {index !== null && <span className="sr-only">{index} · </span>}
              <span className="lowercase">Work With Us</span>
            </span>
          </AnimateIn>
          <h2 className="col-span-12 lg:col-span-7 text-display mt-6">
            <RevealText delay={0.1}>
              Ready to <span className="accent-word">Build</span>?
            </RevealText>
          </h2>
          <AnimateIn
            delay={0.24}
            className="col-span-12 lg:col-start-9 lg:col-span-4 lg:self-end"
          >
            <p className="text-body-lg">
              Book a free strategy call and let&apos;s map out your project,
              tech stack, and launch timeline — zero obligations.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.34} className="col-span-12 mt-8">
            <div className="flex flex-col items-start sm:flex-row sm:items-center gap-3">
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
      </div>
    </section>
  );
}
