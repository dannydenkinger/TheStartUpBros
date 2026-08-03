"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/shared/AnimateIn";

// Distribute images across 4 columns — each column gets 2-3 images, duplicated for infinite loop
const col1 = [
  { src: "/images/portfolio/zonex-dashboard.webp", w: 1920, h: 1072 },
  { src: "/images/portfolio/hotel-booking-landing.webp", w: 400, h: 300 },
  { src: "/images/portfolio/vesta-hero.png", w: 2544, h: 1351 },
  { src: "/images/portfolio/ecommerce-overview.webp", w: 400, h: 300 },
];
const col2 = [
  { src: "/images/portfolio/said-hero-brand.webp", w: 5504, h: 3072 },
  { src: "/images/portfolio/property-ipad.webp", w: 400, h: 300 },
  { src: "/images/portfolio/zonex-film.webp", w: 1920, h: 1080 },
  { src: "/images/portfolio/snack-app-mobile.webp", w: 400, h: 300 },
];
const col3 = [
  { src: "/images/portfolio/estateflow-dashboard.png", w: 2552, h: 1342 },
  { src: "/images/portfolio/taskapp-dashboard.webp", w: 400, h: 300 },
  { src: "/images/portfolio/said-clinical.webp", w: 5504, h: 3072 },
  { src: "/images/portfolio/ai-pattern-landing.webp", w: 400, h: 300 },
];
const col4 = [
  { src: "/images/portfolio/said-lineup.webp", w: 5504, h: 3072 },
  { src: "/images/portfolio/wallet-app-mobile.webp", w: 400, h: 300 },
  { src: "/images/portfolio/vesta-calendar.png", w: 2538, h: 1348 },
  { src: "/images/portfolio/aerion-landing.webp", w: 400, h: 300 },
];

type ImgData = { src: string; w: number; h: number };

function MarqueeColumn({
  images,
  direction,
  duration,
  className,
}: {
  images: ImgData[];
  direction: "up" | "down";
  duration: number;
  className?: string;
}) {
  // Duplicate images for seamless loop
  const doubled = [...images, ...images];

  return (
    <div
      className={cn("relative flex-1 overflow-hidden h-full px-1.5", className)}
    >
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
            className="shrink-0 overflow-hidden rounded-xl bg-white/[0.04]"
          >
            <Image
              src={img.src}
              alt=""
              width={img.w}
              height={img.h}
              quality={90}
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
    <section className="overflow-hidden px-6 md:px-10 pt-3 h-[400px] md:h-[520px]">
      <AnimateIn variant="fadeIn" className="h-full">
        <div
          className="mx-auto h-full max-w-[1360px] overflow-hidden rounded-[24px] p-2 md:p-3"
          style={{ background: "var(--surface-carousel-bg)" }}
        >
          <div className="flex h-full carousel-hover-pause">
            <MarqueeColumn images={col1} direction="up" duration={25} />
            <MarqueeColumn images={col2} direction="down" duration={30} />
            <MarqueeColumn
              images={col3}
              direction="up"
              duration={28}
              className="hidden md:block"
            />
            <MarqueeColumn
              images={col4}
              direction="down"
              duration={26}
              className="hidden md:block"
            />
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
