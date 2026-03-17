"use client";

import { AnimateIn } from "@/components/shared/AnimateIn";
import { DeviceMockup } from "./DeviceMockup";
import { Badge } from "@/components/ui/badge";
import type { PortfolioProject } from "@/types";

interface PortfolioItemProps {
  project: PortfolioProject;
  index: number;
}

export function PortfolioItem({ project, index }: PortfolioItemProps) {
  const device = project.deviceType === "both" ? "macbook" : project.deviceType;

  return (
    <AnimateIn delay={index * 0.08}>
      <div className="group card-elevated p-5">
        <DeviceMockup type={device}>
          <div className="w-full h-full bg-gradient-to-br from-accent/20 to-[#ededed] flex items-center justify-center">
            <span className="text-[12px] text-muted-foreground font-mono">
              {project.title}
            </span>
          </div>
        </DeviceMockup>

        <div className="mt-5">
          <h3 className="text-[14px] font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-[12px] leading-relaxed text-muted-foreground mt-1.5 line-clamp-2">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-[11px] rounded-full px-2.5 py-0.5"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
