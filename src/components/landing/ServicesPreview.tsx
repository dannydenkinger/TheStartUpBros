"use client";

import Link from "next/link";
import { Code, Layers, Brain, Palette, Wrench } from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { BentoGrid } from "@/components/shared/BentoGrid";
import { BentoItem } from "@/components/shared/BentoItem";
import { ElevatedCard } from "@/components/shared/GlassCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  code: Code,
  layers: Layers,
  brain: Brain,
  palette: Palette,
  wrench: Wrench,
};

export function ServicesPreview() {
  return (
    <section className="px-6 lg:px-10 py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-[1280px]">
        <AnimateIn>
          <SectionHeading
            title="What We Build"
            subtitle="From full-stack apps to AI agents — everything a lean startup needs to launch."
          />
        </AnimateIn>

        <BentoGrid columns={3}>
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <BentoItem key={service.title}>
                <AnimateIn delay={i * 0.08}>
                  <Link href="/services" className="block h-full">
                    <ElevatedCard className="h-full group">
                      <Icon className="h-6 w-6 text-accent mb-4" strokeWidth={1.5} />
                      <h3 className="text-[15px] font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-muted-foreground line-clamp-3">
                        {service.description}
                      </p>
                    </ElevatedCard>
                  </Link>
                </AnimateIn>
              </BentoItem>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
