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
  index?: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({
  author,
  text,
  index,
  href,
  className,
}: TestimonialCardProps) {
  const content = (
    <div
      className={cn(
        "flex w-[400px] shrink-0 flex-col gap-5 rounded-md border border-border bg-card p-7 text-left",
        className,
      )}
    >
      {/* Mono eyebrow */}
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
        Principle{index ? ` — ${index}` : ""}
      </p>

      {/* Quote */}
      <p className="font-display text-[20px] leading-[1.4] text-foreground flex-1">
        &ldquo;{text}&rdquo;
      </p>

      {/* Footer */}
      <div className="pt-4 border-t border-border flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-secondary shrink-0">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="text-[14px] font-medium text-foreground leading-tight">
              {author.name}
            </p>
            <p className="font-mono text-[11px] text-muted-foreground leading-tight mt-0.5">
              {author.role}
            </p>
          </div>
        </div>
        <p className="font-mono text-[11px] text-muted-foreground">
          How we work at Startup Bros
        </p>
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
