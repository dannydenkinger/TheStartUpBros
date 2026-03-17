"use client";

import { Marquee } from "@/components/shared/Marquee";
import { AnimateIn } from "@/components/shared/AnimateIn";

const brands = [
  "Sybill",
  "Writesonic",
  "Supabase",
  "Vercel",
  "Linear",
  "OpenAI",
  "Anthropic",
  "Scale",
  "Cohere",
  "Pinecone"
];

export function TechBrandsMarquee() {
  return (
    <section className="py-12 bg-background border-b border-border/40 overflow-hidden">
      <AnimateIn variant="fadeIn">
        <p className="text-center text-[13px] font-medium text-muted-foreground mb-8">
          Trusted by Leading Tech Brands to Deliver
        </p>
        <Marquee pauseOnHover={false} direction="right" className="[--duration:25s]">
          {brands.map((brand) => (
            <div
              key={brand}
              className="text-lg md:text-xl font-bold text-[#242424]/40 hover:text-[#242424]/80 transition-colors duration-300 select-none cursor-default tracking-wide uppercase mx-12"
            >
              {brand}
            </div>
          ))}
        </Marquee>
      </AnimateIn>
    </section>
  );
}
