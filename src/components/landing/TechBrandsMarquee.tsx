"use client";

import { Marquee } from "@/components/shared/Marquee";
import { AnimateIn } from "@/components/shared/AnimateIn";

const brands = [
  "Next.js",
  "Supabase",
  "Vercel",
  "Linear",
  "OpenAI",
  "Anthropic",
  "Stripe",
  "Tailwind",
  "Figma",
  "Framer",
];

export function TechBrandsMarquee() {
  return (
    <section className="py-12 bg-background border-b border-border/40 overflow-hidden">
      <AnimateIn variant="fadeIn">
        <p className="text-center text-[13px] font-medium text-muted-foreground mb-8">
          Tools we build with
        </p>
        <Marquee pauseOnHover={false} direction="right" className="[--duration:25s]">
          {brands.map((brand) => (
            <div
              key={brand}
              className="text-lg md:text-xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300 select-none cursor-default tracking-wide uppercase mx-12"
            >
              {brand}
            </div>
          ))}
        </Marquee>
      </AnimateIn>
    </section>
  );
}
