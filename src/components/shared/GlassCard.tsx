import { cn } from "@/lib/utils";

interface ElevatedCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function ElevatedCard({
  children,
  className,
  hover = true,
}: ElevatedCardProps) {
  return (
    <div
      className={cn(
        "card-elevated p-7",
        !hover && "[&]:hover:transform-none [&]:hover:shadow-none",
        className
      )}
    >
      {children}
    </div>
  );
}

/** @deprecated Use ElevatedCard instead */
export const GlassCard = ElevatedCard;
