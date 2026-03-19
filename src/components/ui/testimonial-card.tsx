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
        "relative flex w-[350px] shrink-0 flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      <p className="text-[15px] leading-[1.6] text-foreground font-medium">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-border/40">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-secondary shrink-0">
          <Image
            src={author.image}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[14px] font-bold text-foreground leading-tight">
            {author.name}
          </p>
          <p className="text-[13px] text-muted-foreground leading-tight">
            {author.role}
          </p>
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
