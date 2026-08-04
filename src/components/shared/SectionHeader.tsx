"use client";

import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { RevealText } from "@/components/shared/RevealText";
import { WordColorReveal } from "@/components/shared/WordColorReveal";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
}

export function SectionHeader({
  index,
  label,
  title,
  intro,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn("grid grid-cols-12 gap-x-6 gap-y-6 mb-20 md:mb-28", className)}
    >
      <AnimateIn variant="fadeUp" className="col-span-12">
        <span className="badge-pill text-micro-label">
          <span aria-hidden className="label-dot" />
          <span className="sr-only">{index} · </span>
          <span className="lowercase">{label}</span>
        </span>
      </AnimateIn>
      <h2 className="col-span-12 lg:col-start-1 lg:col-span-7 text-h2">
        <RevealText delay={0.08}>{title}</RevealText>
      </h2>
      {intro && (
        <div className="col-span-12 lg:col-start-9 lg:col-span-4 lg:self-end text-body-lg">
          {typeof intro === "string" ? (
            <WordColorReveal text={intro} className="text-body-lg" />
          ) : (
            <AnimateIn variant="fadeUp" delay={0.12}>
              {intro}
            </AnimateIn>
          )}
        </div>
      )}
    </div>
  );
}
