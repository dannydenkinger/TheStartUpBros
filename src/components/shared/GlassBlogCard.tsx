"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { REVEAL_EASE } from "@/lib/animations";

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
  /** 1-based position of the card on the page — used for the generated cover's FIG. label. */
  figIndex?: number;
}

function CardMedia({
  title,
  image,
  category,
  fill = false,
  figIndex = 1,
}: {
  title: string;
  image?: string;
  category?: string;
  fill?: boolean;
  figIndex?: number;
}) {
  if (!image) {
    // Generated cover — soft gray block with a decorative oversized text crop
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden bg-secondary p-7 md:p-8",
          fill ? "aspect-[16/9] lg:aspect-auto lg:h-full" : "aspect-[16/9]"
        )}
      >
        <p
          aria-hidden
          className="select-none overflow-hidden whitespace-nowrap text-[7rem] font-medium leading-[1.05] tracking-[-0.025em] text-foreground/[0.06] -translate-x-4 translate-y-6"
        >
          {title}
        </p>
        <p className="absolute bottom-5 left-7 md:left-8 text-xs text-muted-foreground">
          FIG. {String(figIndex).padStart(2, "0")}
          {category ? ` — ${category}` : ""}
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
      {/* Cover reveal — the crop settles out of a 1.06 overscale as the card
       * enters, so the image feels developed rather than pasted. Lives on a
       * wrapper so the hover zoom on the <img> composes instead of fighting. */}
      <MediaReveal>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </MediaReveal>
    </div>
  );
}

function MediaReveal({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return <div className="h-full w-full">{children}</div>;

  return (
    <motion.div
      className="h-full w-full will-change-transform"
      initial={{ scale: 1.06, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: REVEAL_EASE }}
    >
      {children}
    </motion.div>
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
  figIndex = 1,
}: GlassBlogCardProps) {
  const meta = (
    <div className="flex items-center gap-3 min-w-0">
      {category && (
        <span className="shrink-0 text-[13px] font-medium text-(--accent-brand)">
          {category}
        </span>
      )}
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
    <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-7 min-h-0 lg:self-stretch">
        <CardMedia
          title={title}
          image={image}
          category={category}
          fill
          figIndex={figIndex}
        />
      </div>
      <div className="lg:col-span-5 flex flex-col gap-5 p-7 md:p-9 lg:justify-center">
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
      <CardMedia
        title={title}
        image={image}
        category={category}
        figIndex={figIndex}
      />
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
    "group block h-full overflow-hidden rounded-[20px] bg-card transition-[transform,background-color] duration-300",
    href && "hover:-translate-y-0.5 hover:bg-(--surface-card-hover)",
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
