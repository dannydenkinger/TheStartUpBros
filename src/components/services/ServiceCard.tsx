"use client";

import { Code, Layers, Brain, Palette, Wrench } from "lucide-react";
import { ElevatedCard } from "@/components/shared/GlassCard";
import { AnimateIn } from "@/components/shared/AnimateIn";
import type { Service } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  code: Code,
  layers: Layers,
  brain: Brain,
  palette: Palette,
  wrench: Wrench,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Code;

  return (
    <AnimateIn delay={index * 0.08}>
      <ElevatedCard className="h-full">
        <Icon className="h-7 w-7 text-accent mb-5" strokeWidth={1.5} />
        <h3 className="text-h3 text-foreground mb-3">{service.title}</h3>
        <p className="text-[13px] leading-relaxed text-muted-foreground mb-6">
          {service.description}
        </p>
        <ul className="space-y-2.5">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="text-[13px] text-muted-foreground flex items-start gap-2.5"
            >
              <span className="text-accent mt-0.5 shrink-0">&#x2022;</span>
              {feature}
            </li>
          ))}
        </ul>
      </ElevatedCard>
    </AnimateIn>
  );
}
