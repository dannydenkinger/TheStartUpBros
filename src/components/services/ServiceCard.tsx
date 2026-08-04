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
      {/* Hover craft, built on the existing card language rather than a new
       * one: the tonal background swap stays (card-elevated), the card lifts
       * 2px, the icon rises with it, the index dims back, and the "Explore →"
       * arrow steps out. Transform + colour only, all on the house 0.3s
       * cubic-bezier(0.44,0,0.56,1) hover curve. */}
      <Link
        href={`/services/${service.slug}`}
        className="card-elevated group flex h-full flex-col transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        <div className="mb-6 flex items-start justify-between">
          <Icon
            className="h-5 w-5 text-foreground transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
            strokeWidth={1.5}
          />
          <span className="text-xs tabular-nums text-muted-foreground/80 transition-opacity duration-300 group-hover:opacity-50 motion-reduce:transition-none">
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
        <span className="mt-auto text-[13px] font-medium text-(--accent-brand)">
          Explore{" "}
          <span
            aria-hidden
            className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
          >
            →
          </span>
        </span>
      </Link>
    </AnimateIn>
  );
}
