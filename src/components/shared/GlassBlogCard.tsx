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

function CardMedia({
  title,
  image,
  category,
  fill = false,
}: {
  title: string;
  image?: string;
  category?: string;
  fill?: boolean;
}) {
  if (!image) {
    // Generated cover — soft gray block with a large low-opacity title
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden bg-secondary p-7 md:p-8",
          fill ? "aspect-[16/9] lg:aspect-auto lg:h-full" : "aspect-[16/9]"
        )}
      >
        <p className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-[1.12] tracking-[-0.025em] text-foreground/10">
          {title}
        </p>
        <p className="absolute bottom-5 left-7 md:left-8 text-xs text-muted-foreground">
          FIG. 00{category ? ` — ${category}` : ""}
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-full overflow-hidden",
        fill ? "aspect-[16/9] lg:aspect-auto lg:h-full" : "aspect-[16/9]"
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
      />
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
    <div className="flex items-center gap-3 min-w-0">
      {category && <span className="badge-pill shrink-0">{category}</span>}
      <span className="text-[13px] text-muted-foreground truncate">
        {[date, readTime].filter(Boolean).join(" · ")}
      </span>
      <span
        aria-hidden
        className="ml-auto shrink-0 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-(--accent-brand)"
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
    <p className="text-[13px] text-muted-foreground">
      {author}
      {authorRole ? ` — ${authorRole}` : ""}
    </p>
  ) : null;

  const body = featured ? (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="lg:col-span-7 min-h-0">
        <CardMedia title={title} image={image} category={category} fill />
      </div>
      <div className="lg:col-span-5 flex flex-col gap-5 p-7 md:p-9 lg:justify-end">
        {meta}
        <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.12] tracking-[-0.025em] text-foreground">
          {titleEl}
        </h2>
        {excerpt && (
          <p className="text-[15px] leading-[1.6] text-muted-foreground line-clamp-2 max-w-[480px]">
            {excerpt}
          </p>
        )}
        {authorLine}
      </div>
    </div>
  ) : (
    <div className="flex h-full flex-col">
      <CardMedia title={title} image={image} category={category} />
      <div className="flex flex-1 flex-col gap-4 p-7">
        {meta}
        <h3 className="text-[24px] font-medium leading-[1.2] tracking-[-0.02em] text-foreground">
          {titleEl}
        </h3>
        {excerpt && (
          <p className="text-[15px] leading-[1.6] text-muted-foreground line-clamp-2">
            {excerpt}
          </p>
        )}
        {authorLine && <div className="mt-auto pt-1">{authorLine}</div>}
      </div>
    </div>
  );

  const cardClass = cn(
    "group block h-full overflow-hidden rounded-[20px] bg-card shadow-(--shadow-plate) transition-[transform,box-shadow] duration-300",
    href && "hover:-translate-y-0.5 hover:shadow-(--shadow-plate-hover)",
    className
  );

  if (href) {
    return (
      <Link href={href} className={cardClass}>
        {body}
      </Link>
    );
  }

  return <div className={cardClass}>{body}</div>;
}
