import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-h2 text-foreground">{title}</h2>
      {subtitle && (
        <p className="text-body-lg mt-5 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
