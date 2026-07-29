interface StatusStripProps {
  items: { label: string; value: string }[];
}

export function StatusStrip({ items }: StatusStripProps) {
  return (
    <div className="border border-border rounded-[2px] grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
      {items.map((item, i) => (
        <div
          key={item.label}
          className="flex items-center justify-center gap-2 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground text-center whitespace-nowrap"
        >
          {i === 0 && (
            <span aria-hidden className="size-1.5 shrink-0 bg-(--accent-brand)" />
          )}
          <span>
            {item.label} — {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
