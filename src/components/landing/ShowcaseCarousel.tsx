"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/shared/AnimateIn";

// Distribute images across 4 columns — each column gets 2-3 images, duplicated for infinite loop
const col1 = [
  { src: "/images/portfolio/crm-dashboard.webp", w: 800, h: 600 },
  { src: "/images/portfolio/ai-finance.avif", w: 512, h: 321 },
  { src: "/images/portfolio/travel-app.webp", w: 800, h: 600 },
];
const col2 = [
  { src: "/images/portfolio/sales-crm-full.webp", w: 800, h: 600 },
  { src: "/images/portfolio/socialsonic.avif", w: 656, h: 796 },
  { src: "/images/portfolio/fintech-mobile.webp", w: 800, h: 600 },
];
const col3 = [
  { src: "/images/portfolio/defi-landing.webp", w: 800, h: 600 },
  { src: "/images/portfolio/productivity-dashboard.webp", w: 800, h: 600 },
  { src: "/images/portfolio/community-search.avif", w: 488, h: 363 },
];
const col4 = [
  { src: "/images/portfolio/freelancer-dashboard.webp", w: 800, h: 600 },
  { src: "/images/portfolio/ai-landing.webp", w: 800, h: 600 },
  { src: "/images/portfolio/fintech-app-duo.webp", w: 800, h: 600 },
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
    <div className="relative flex-1 overflow-hidden rounded-2xl" style={{ height: 858 }}>
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
    <section className="overflow-hidden">
      <AnimateIn variant="fadeIn">
        <div className="rounded-none md:rounded-3xl mx-0 md:mx-6 lg:mx-10 p-3" style={{ background: 'var(--surface-carousel-bg)' }}>
          <div className="flex gap-3">
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
