interface StatusStripProps {
  items: { label: string; value: string }[];
}

export function StatusStrip({ items }: StatusStripProps) {
  return (
    <div className="grid grid-cols-1 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-(--surface-badge-bg) sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:rounded-full">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-center gap-2.5 px-4 py-3 text-xs font-medium uppercase tracking-[0.06em] text-muted-foreground text-center whitespace-nowrap"
        >
          <span
            aria-hidden
            className="size-[3px] shrink-0 rounded-full bg-(--accent-brand)"
          />
          <span>
            {item.label} — {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
