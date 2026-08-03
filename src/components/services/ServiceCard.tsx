"use client";

import Link from "next/link";
import { Code, Layers, Brain, Palette, Wrench } from "lucide-react";
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
    <AnimateIn delay={index * 0.08} className="h-full">
      <Link
        href={`/services/${service.slug}`}
        className="card-elevated group flex h-full flex-col"
      >
        <div className="mb-6 flex items-start justify-between">
          <Icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
          <span className="text-xs tabular-nums text-muted-foreground/80">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="text-h3 text-foreground mb-3">{service.title}</h3>
        <p className="text-caption text-muted-foreground mb-6">
          {service.description}
        </p>
        <ul className="mb-8 space-y-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="text-[13px] leading-snug text-muted-foreground"
            >
              {feature}
            </li>
          ))}
        </ul>
        <span className="mt-auto text-sm font-medium text-(--accent-brand)">
          Explore →
        </span>
      </Link>
    </AnimateIn>
  );
}
