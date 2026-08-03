import { cn } from "@/lib/utils";

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
    <div className={cn("grid grid-cols-12 gap-x-6 gap-y-6 mb-16", className)}>
      <div className="col-span-12">
        <span className="badge-pill text-micro-label">
          <span className="text-muted-foreground">{index}</span>
          <span aria-hidden className="text-muted-foreground">
            ·
          </span>
          {label}
        </span>
      </div>
      <h2 className="col-span-12 lg:col-start-1 lg:col-span-7 text-h2">
        {title}
      </h2>
      {intro && (
        <div className="col-span-12 lg:col-start-9 lg:col-span-4 lg:self-end text-body-lg">
          {intro}
        </div>
      )}
    </div>
  );
}
