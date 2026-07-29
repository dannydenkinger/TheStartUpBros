import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-16", className)}>
      {subtitle && (
        <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
          {subtitle}
        </p>
      )}
      <h2 className="text-h2 text-foreground max-w-[720px]">{title}</h2>
    </div>
  );
}
