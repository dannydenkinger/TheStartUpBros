import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

const colClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
} as const;

export function BentoGrid({
  children,
  columns = 3,
  className,
}: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5",
        colClasses[columns],
        className
      )}
    >
      {children}
    </div>
  );
}
