"use client";

import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn about your vision, market, and goals. You walk away with a clear scope document — free of charge.",
  },
  {
    number: "02",
    title: "Scope & Blueprint",
    description:
      "We define the exact features, tech stack, and timeline. You get a fixed-price quote with no surprises.",
  },
  {
    number: "03",
    title: "Build Sprint",
    description:
      "Our team ships your MVP in focused 1-2 week sprints. You see progress daily with live preview links.",
  },
  {
    number: "04",
    title: "Launch & Iterate",
    description:
      "We deploy to production, hand over the keys, and stay on for iteration as you gather real user feedback.",
  },
];

export function ProcessSteps() {
  return (
    <section className="px-6 lg:px-10 py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-[680px]">
        <AnimateIn>
          <SectionHeading
            title="How We Work"
            subtitle="A proven process that gets founders from idea to launched product."
          />
        </AnimateIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-[3px] bg-border rounded-full" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <AnimateIn key={step.number} delay={i * 0.08}>
                <div className="relative flex gap-7">
                  {/* Step number */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-[13px] font-bold">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="pt-1.5">
                    <h3 className="text-[15px] font-semibold text-foreground mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
