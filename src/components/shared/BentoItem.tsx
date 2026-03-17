import { cn } from "@/lib/utils";

interface BentoItemProps {
  children: React.ReactNode;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
  className?: string;
}

export function BentoItem({
  children,
  colSpan = 1,
  rowSpan = 1,
  className,
}: BentoItemProps) {
  return (
    <div
      className={cn(
        colSpan === 2 && "md:col-span-2",
        rowSpan === 2 && "md:row-span-2",
        className
      )}
    >
      {children}
    </div>
  );
}
