"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface GlassBlogCardProps {
  title: string;
  excerpt?: string;
  image?: string;
  author?: string;
  authorRole?: string;
  date?: string;
  readTime?: string;
  category?: string;
  className?: string;
  href?: string;
  featured?: boolean;
}

function CardPlate({
  title,
  image,
  category,
}: {
  title: string;
  image?: string;
  category?: string;
}) {
  if (!image) {
    return (
      <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-border bg-secondary dark:bg-card p-8">
        <p className="font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] tracking-[-0.01em] text-foreground/15">
          {title}
        </p>
        <p className="absolute bottom-4 left-8 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
          FIG. 00{category ? ` — ${category}` : ""}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-border bg-secondary p-1.5">
      <div className="aspect-[16/9] overflow-hidden rounded-[4px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}

export function GlassBlogCard({
  title,
  excerpt,
  image,
  author,
  authorRole,
  date,
  readTime,
  category,
  className,
  href,
  featured = false,
}: GlassBlogCardProps) {
  const meta = (
    <div className="flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
      <span className="truncate">
        {[category, date, readTime].filter(Boolean).join(" · ")}
      </span>
      <span
        aria-hidden
        className="flex-1 border-b border-dotted border-muted-foreground/40 -translate-y-[3px]"
      />
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-(--accent-brand)"
      >
        →
      </span>
    </div>
  );

  const titleEl = (
    <span className="link-sweep group-hover:[background-size:100%_2px]">
      {title}
    </span>
  );

  const authorLine = author ? (
    <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
      {author}
      {authorRole ? ` — ${authorRole}` : ""}
    </p>
  ) : null;

  const body = featured ? (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-7">
        <CardPlate title={title} image={image} category={category} />
      </div>
      <div className="col-span-12 lg:col-start-8 lg:col-span-5 flex flex-col gap-5 lg:pl-4 lg:self-end">
        {meta}
        <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.1] tracking-[-0.01em] text-foreground">
          {titleEl}
        </h2>
        {excerpt && (
          <p className="text-caption text-muted-foreground line-clamp-2 max-w-[480px]">
            {excerpt}
          </p>
        )}
        {authorLine}
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-5">
      <CardPlate title={title} image={image} category={category} />
      {meta}
      <h3 className="font-display text-[26px] leading-[1.15] tracking-[-0.01em] text-foreground">
        {titleEl}
      </h3>
      {excerpt && (
        <p className="text-caption text-muted-foreground line-clamp-2">
          {excerpt}
        </p>
      )}
      {authorLine}
    </div>
  );

  const cardClass = cn("group block border-t border-border pt-6", className);

  if (href) {
    return (
      <Link href={href} className={cardClass}>
        {body}
      </Link>
    );
  }

  return <div className={cardClass}>{body}</div>;
}
