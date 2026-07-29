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
    <AnimateIn delay={index * 0.08} className="h-full bg-background">
      <Link
        href={`/services/${service.slug}`}
        className="group flex h-full flex-col bg-background p-8 hover:bg-secondary/60 transition-colors duration-300"
      >
        <div className="flex items-start justify-between mb-6">
          <Icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
          <span className="font-mono text-sm tracking-[0.04em] text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="text-h3 text-foreground mb-3">{service.title}</h3>
        <p className="text-caption text-muted-foreground mb-6">
          {service.description}
        </p>
        <ul className="mb-8">
          {service.features.map((feature, i) => (
            <li
              key={feature}
              className="flex items-baseline gap-3 py-3 border-b border-border/60"
            >
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-foreground">
                {feature}
              </span>
              <span
                aria-hidden
                className="flex-1 min-w-6 border-b border-dotted border-muted-foreground/40 -translate-y-[3px]"
              />
              <span className="font-mono text-xs tracking-[0.04em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ul>
        <span className="mt-auto text-micro-label text-foreground group-hover:text-(--accent-brand) transition-colors duration-200">
          Explore →
        </span>
      </Link>
    </AnimateIn>
  );
}
