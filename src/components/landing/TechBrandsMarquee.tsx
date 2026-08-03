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
    <section className="bg-background overflow-hidden py-4 md:py-5">
      <AnimateIn variant="fadeIn">
        <div className="flex flex-col md:flex-row md:items-center">
          <p className="shrink-0 px-6 md:px-10 py-3 md:py-4 text-micro-label text-muted-foreground/80 whitespace-nowrap">
            Tools we build with
          </p>
          <Marquee pauseOnHover={false} direction="right" className="flex-1 py-4">
            {brands.map((brand) => (
              <span
                key={brand}
                className="mx-8 md:mx-10 text-[15px] font-medium tracking-[-0.01em] text-muted-foreground/70 select-none cursor-default whitespace-nowrap"
              >
                {brand}
              </span>
            ))}
          </Marquee>
        </div>
      </AnimateIn>
    </section>
  );
}
