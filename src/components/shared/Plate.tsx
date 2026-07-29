import { cn } from "@/lib/utils";

interface PlateProps {
  children: React.ReactNode;
  caption?: string;
  fig?: string;
  shadow?: boolean;
  className?: string;
}

export function Plate({
  children,
  caption,
  fig,
  shadow = false,
  className,
}: PlateProps) {
  return (
    <figure className={className}>
      <div
        className={cn(
          "rounded-md border border-border bg-secondary p-1.5",
          shadow && "shadow-(--shadow-plate)"
        )}
      >
        {children}
      </div>
      {(caption || fig) && (
        <figcaption className="mt-2 flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
          {caption && <span>{caption}</span>}
          <span
            aria-hidden
            className="flex-1 border-b border-dotted border-muted-foreground/40 -translate-y-[3px]"
          />
          {fig && <span className="whitespace-nowrap">FIG. {fig}</span>}
        </figcaption>
      )}
    </figure>
  );
}
