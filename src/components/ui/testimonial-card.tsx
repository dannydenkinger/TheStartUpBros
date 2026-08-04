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
  /** "dark" renders the card as a small band-black tile for texture. */
  tone?: "light" | "dark";
}

export function TestimonialCard({
  author,
  text,
  index,
  href,
  className,
  tone = "light",
}: TestimonialCardProps) {
  const content = (
    <div
      className={cn(
        "flex w-[min(400px,85vw)] shrink-0 flex-col gap-5 rounded-[16px] p-6 md:p-7 text-left",
        tone === "dark" ? "on-band bg-(--band-card)" : "bg-card",
        className,
      )}
    >
      {/* Chip */}
      <p>
        <span className="badge-pill">
          Principle{index ? ` ${index}` : ""}
        </span>
      </p>

      {/* Quote */}
      <p className="text-[19px] leading-[1.45] tracking-[-0.015em] font-medium text-foreground flex-1">
        &ldquo;{text}&rdquo;
      </p>

      {/* Footer */}
      <div className="flex flex-col gap-3 pt-1">
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
            <p className="text-[13px] text-muted-foreground leading-tight mt-0.5">
              {author.role}
            </p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground/80">
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
