import { PortfolioItem } from "./PortfolioItem";
import type { PortfolioProject } from "@/types";

interface PortfolioGridProps {
  projects: PortfolioProject[];
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
      {projects.map((project, i) => (
        <div key={project.title} className="break-inside-avoid">
          <PortfolioItem project={project} index={i} />
        </div>
      ))}
    </div>
  );
}
