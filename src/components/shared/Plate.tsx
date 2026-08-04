import { cn } from "@/lib/utils";

interface PlateProps {
  children: React.ReactNode;
  caption?: string;
  fig?: string;
  shadow?: boolean;
  className?: string;
  mat?: boolean;
}

export function Plate({
  children,
  caption,
  fig,
  shadow = false,
  className,
  mat = false,
}: PlateProps) {
  return (
    <figure className={className}>
      <div
        className={cn(
          "overflow-hidden rounded-[20px] bg-card",
          mat && "p-2",
          shadow && "shadow-(--shadow-plate)"
        )}
      >
        {mat ? (
          <div className="overflow-hidden rounded-[13px]">{children}</div>
        ) : (
          children
        )}
      </div>
      {(caption || fig) && (
        <figcaption className="mt-3 flex items-baseline justify-between gap-3 text-xs text-muted-foreground">
          {caption && <span className="min-w-0 truncate">{caption}</span>}
          {fig && (
            <span className="ml-auto whitespace-nowrap">FIG. {fig}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
