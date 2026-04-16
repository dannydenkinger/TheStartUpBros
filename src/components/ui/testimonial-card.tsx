import Image from "next/image";
import { cn } from "@/lib/utils";

export interface TestimonialAuthor {
  name: string;
  role: string;
  image: string;
}

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({
  author,
  text,
  href,
  className,
}: TestimonialCardProps) {
  const content = (
    <div
      className={cn(
        "relative flex w-[420px] shrink-0 flex-col gap-5 rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md text-left",
        className,
      )}
    >
      {/* Top row: avatar left, "on Clutch" right */}
      <div className="flex items-start justify-between gap-3">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-secondary shrink-0">
          <Image
            src={author.image}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center gap-1.5 mt-2">
          <span className="text-[13px] text-muted-foreground">on</span>
          <span className="text-[16px] font-bold text-foreground tracking-tight">
            Clutch
          </span>
        </div>
      </div>

      {/* Name + role on one line */}
      <p className="text-[14px] leading-[1.4] text-foreground">
        <span className="font-bold">{author.name},</span>{" "}
        <span className="text-muted-foreground">{author.role}</span>
      </p>

      {/* Quote */}
      <p className="text-[15px] leading-[1.55] text-foreground/90 flex-1">
        &ldquo;{text}&rdquo;
      </p>

      {/* Footer: read link left, Clutch wordmark + arrow right */}
      <div className="flex items-center justify-between pt-4 border-t border-border/40">
        <p className="text-[13px] text-muted-foreground underline underline-offset-2 decoration-border">
          Read full review on clutch
        </p>
        <div className="flex items-center gap-1 text-foreground">
          <span className="text-[14px] font-bold tracking-tight">Clutch</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
