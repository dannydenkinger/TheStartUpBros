import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function CTAButton({
  children,
  href,
  variant = "primary",
  className,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "btn-pill",
        variant === "primary" && "btn-pill-primary",
        variant === "secondary" && "btn-pill-secondary",
        className
      )}
    >
      {children}
    </Link>
  );
}
