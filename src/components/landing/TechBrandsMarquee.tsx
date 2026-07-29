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
    <section className="border-y border-border bg-background overflow-hidden">
      <AnimateIn variant="fadeIn">
        <div className="flex flex-col md:flex-row md:items-center">
          <p className="shrink-0 border-b md:border-b-0 md:border-r border-border px-6 md:px-10 py-3 md:py-4 text-micro-label text-muted-foreground whitespace-nowrap">
            Tools we build with
          </p>
          <Marquee pauseOnHover={false} direction="right" className="flex-1 py-4">
            {brands.map((brand, i) => (
              <div
                key={brand}
                className="flex items-center text-micro-label text-muted-foreground select-none cursor-default"
              >
                {i % 4 === 0 && (
                  <span aria-hidden className="size-1.5 shrink-0 bg-(--accent-brand) mr-6" />
                )}
                <span>{brand}</span>
                <span aria-hidden className="mx-6 text-muted-foreground/60">
                  —
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </AnimateIn>
    </section>
  );
}
