interface StatusStripProps {
  items: { label: string; value: string }[];
}

export function StatusStrip({ items }: StatusStripProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2 text-[13px] font-normal normal-case tracking-normal text-muted-foreground whitespace-nowrap"
        >
          <span
            aria-hidden
            className="size-1 shrink-0 rounded-full bg-(--accent-brand)"
          />
          <span>
            {item.label} — {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
