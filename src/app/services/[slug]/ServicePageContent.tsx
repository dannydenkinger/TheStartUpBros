"use client";

import { AnimateIn } from "@/components/shared/AnimateIn";
import { CTAButton } from "@/components/shared/CTAButton";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { Code, Layers, Brain, Palette, Wrench } from "lucide-react";
import type { Service } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  code: Code,
  layers: Layers,
  brain: Brain,
  palette: Palette,
  wrench: Wrench,
};

export function ServicePageContent({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Code;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero */}
      <section className="px-6 lg:px-10 pt-[160px] pb-20 md:pb-28">
        <div className="mx-auto max-w-[900px] text-center">
          <AnimateIn variant="fadeUp">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary border border-border mb-8">
              <Icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
            </div>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.08}>
            <h1 className="text-display text-foreground mb-6">
              {service.title}
            </h1>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.16}>
            <p className="text-body-lg max-w-[700px] mx-auto mb-10">
              {service.longDescription}
            </p>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.24}>
            <MagneticButton>
              <CTAButton href="/strategy-call" variant="primary">
                Book a Consultation
              </CTAButton>
            </MagneticButton>
          </AnimateIn>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="px-6 lg:px-10 py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-[1100px]">
          <AnimateIn>
            <h2 className="text-h2 text-foreground text-center mb-14">
              What&apos;s Included
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.features.map((feature, i) => (
              <AnimateIn key={feature} delay={i * 0.08}>
                <div className="card-elevated p-7">
                  <div className="w-2 h-2 rounded-full bg-foreground/40 mb-4" />
                  <p className="text-[15px] font-medium text-foreground">
                    {feature}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 lg:px-10 py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-[900px]">
          <AnimateIn>
            <h2 className="text-h2 text-foreground text-center mb-14">
              Use Cases
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.useCases.map((useCase, i) => (
              <AnimateIn key={useCase} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card">
                  <span className="text-foreground/60 font-mono text-sm mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[14px] leading-relaxed text-muted-foreground">
                    {useCase}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 lg:px-10 py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-[900px] text-center">
          <AnimateIn>
            <h2 className="text-h2 text-foreground mb-10">Tech Stack</h2>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="badge-pill"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Deliverables */}
      <section className="px-6 lg:px-10 py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-[700px]">
          <AnimateIn>
            <h2 className="text-h2 text-foreground text-center mb-14">
              What You Get
            </h2>
          </AnimateIn>

          <div className="space-y-4">
            {service.deliverables.map((deliverable, i) => (
              <AnimateIn key={deliverable} delay={i * 0.06}>
                <div className="flex items-center gap-4 py-4 border-b border-border">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-[15px] text-foreground font-medium">
                    {deliverable}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-[680px] text-center">
          <AnimateIn>
            <h2 className="text-h1 text-foreground mb-5">
              Ready to Build?
            </h2>
            <p className="text-body-lg mb-10">
              Book a free strategy call. We&apos;ll scope your project, estimate timelines, and map out the fastest path to launch.
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
    </div>
  );
}
