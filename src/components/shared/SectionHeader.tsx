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
    <div
      className={cn(
        "border-t border-border pt-6 grid grid-cols-12 gap-6 mb-16",
        className
      )}
    >
      <p className="col-span-12 lg:col-span-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
        {index} / {label}
      </p>
      <h2 className="col-span-12 lg:col-start-1 lg:col-span-7 text-h2 text-foreground">
        {title}
      </h2>
      {intro && (
        <div className="col-span-12 lg:col-start-9 lg:col-span-4 lg:self-end text-body-lg text-muted-foreground">
          {intro}
        </div>
      )}
    </div>
  );
}
