"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { CTAButton } from "@/components/shared/CTAButton";
import { MagneticButton } from "@/components/shared/MagneticButton";
import type { PortfolioProject } from "@/types";

export function CaseStudyContent({ project }: { project: PortfolioProject }) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero */}
      <section className="px-6 lg:px-10 pt-[160px] pb-12">
        <div className="mx-auto max-w-[1000px]">
          <AnimateIn variant="fadeUp">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="badge-pill">
                  {tag}
                </span>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.08}>
            <h1 className="text-[48px] md:text-[64px] font-medium leading-[1.05] tracking-[-0.03em] text-foreground mb-6">
              {project.title}
            </h1>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.16}>
            <p className="text-[17px] md:text-[20px] text-muted-foreground leading-relaxed max-w-[800px]">
              {project.description}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-0 w-[90vw] max-w-none mx-auto mb-20 md:mb-32">
        <AnimateIn variant="scaleIn" delay={0.2}>
          <div className="relative aspect-[16/9] md:aspect-[2.4/1] w-full rounded-[24px] md:rounded-[32px] overflow-hidden bg-card border border-border">
            <Image
              src={project.image}
              alt={`${project.title} hero`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </AnimateIn>
      </section>

      {/* The Challenge */}
      <section className="px-6 lg:px-10 py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-[1000px]">
          <div className="flex flex-col md:flex-row gap-8 md:gap-20">
            <AnimateIn className="md:w-1/3">
              <h2 className="text-h2 text-foreground">The Challenge</h2>
            </AnimateIn>
            <AnimateIn delay={0.1} className="md:w-2/3">
              <p className="text-[16px] md:text-[18px] text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* The Startup Bros Solution */}
      <section className="px-6 lg:px-10 py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-[1000px]">
          <div className="flex flex-col md:flex-row gap-8 md:gap-20">
            <AnimateIn className="md:w-1/3">
              <h2 className="text-h2 text-foreground">Our Solution</h2>
            </AnimateIn>
            <AnimateIn delay={0.1} className="md:w-2/3">
              <p className="text-[16px] md:text-[18px] text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Delivery Timeline */}
      <section className="px-6 lg:px-10 py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-[1000px] text-center">
          <AnimateIn>
            <p className="text-[13px] text-muted-foreground uppercase tracking-wider mb-2">
              Delivery Timeline
            </p>
            <p className="text-[64px] md:text-[80px] font-semibold text-foreground leading-none">
              {project.timeline}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 lg:px-10 py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-[900px] text-center">
          <AnimateIn>
            <h2 className="text-h2 text-foreground mb-8">Tech Stack</h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {project.techStack.map((tech) => (
                <span key={tech} className="badge-pill">
                  {tech}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-6 lg:px-10 py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-[700px]">
          <AnimateIn>
            <h2 className="text-h2 text-foreground text-center mb-12">
              Outcomes
            </h2>
          </AnimateIn>
          <div className="space-y-4">
            {project.outcomes.map((outcome, i) => (
              <AnimateIn key={outcome} delay={i * 0.06}>
                <div className="flex items-start gap-4 py-4 border-b border-border">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-400"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-[15px] text-foreground font-medium">
                    {outcome}
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
              Ready to Build Something Like This?
            </h2>
            <p className="text-body-lg mb-10">
              Book a free strategy call. We&apos;ll scope your project and map out
              the fastest path to launch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <MagneticButton>
                <CTAButton href="/strategy-call" variant="primary">
                  Book Strategy Call
                </CTAButton>
              </MagneticButton>
              <CTAButton href="/portfolio" variant="secondary">
                View More Work
              </CTAButton>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
