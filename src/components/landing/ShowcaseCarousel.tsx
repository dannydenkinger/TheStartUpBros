"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/shared/AnimateIn";

// Distribute images across 4 columns — each column gets 2-3 images, duplicated for infinite loop
const col1 = [
  { src: "/images/portfolio/zonex-dashboard.webp", w: 1920, h: 1072 },
  { src: "/images/portfolio/vesta-hero.png", w: 2544, h: 1351 },
  { src: "/images/portfolio/estateflow-properties.png", w: 2555, h: 1342 },
];
const col2 = [
  { src: "/images/portfolio/said-hero-brand.webp", w: 5504, h: 3072 },
  { src: "/images/portfolio/zonex-film.webp", w: 1920, h: 1080 },
  { src: "/images/portfolio/vesta-seo.png", w: 2554, h: 1350 },
];
const col3 = [
  { src: "/images/portfolio/estateflow-dashboard.png", w: 2552, h: 1342 },
  { src: "/images/portfolio/said-clinical.webp", w: 5504, h: 3072 },
  { src: "/images/portfolio/defi-landing.webp", w: 800, h: 600 },
];
const col4 = [
  { src: "/images/portfolio/said-lineup.webp", w: 5504, h: 3072 },
  { src: "/images/portfolio/vesta-calendar.png", w: 2538, h: 1348 },
  { src: "/images/portfolio/fintech-mobile.webp", w: 800, h: 600 },
];

type ImgData = { src: string; w: number; h: number };

function MarqueeColumn({
  images,
  direction,
  duration,
}: {
  images: ImgData[];
  direction: "up" | "down";
  duration: number;
}) {
  // Duplicate images for seamless loop
  const doubled = [...images, ...images];

  return (
    <div className="relative flex-1 overflow-hidden rounded-2xl h-full">
      <div
        className={`flex flex-col gap-3 ${
          direction === "up" ? "animate-marquee-up" : "animate-marquee-down"
        }`}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {doubled.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="shrink-0 overflow-hidden rounded-2xl border border-border bg-card"
          >
            <Image
              src={img.src}
              alt=""
              width={img.w}
              height={img.h}
              className="w-full h-auto object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ShowcaseCarousel() {
  return (
    <section className="overflow-hidden flex-1 min-h-0">
      <AnimateIn variant="fadeIn" className="h-full">
        <div className="rounded-none md:rounded-t-3xl mx-0 md:mx-6 lg:mx-10 pt-3 px-3 h-full" style={{ background: 'var(--surface-carousel-bg)' }}>
          <div className="flex gap-3 h-full carousel-hover-pause">
            <MarqueeColumn images={col1} direction="up" duration={25} />
            <MarqueeColumn images={col2} direction="down" duration={30} />
            <MarqueeColumn images={col3} direction="up" duration={28} />
            <MarqueeColumn images={col4} direction="down" duration={26} />
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
