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

// Mobile film strip — one horizontal marquee row of full tiles at a legible
// height, instead of squeezing the vertical columns into a phone viewport.
const stripImages = [...col1, ...col2, ...col3, ...col4];

function MobileFilmStrip() {
  // Duplicate images for seamless -50% loop
  const doubled = [...stripImages, ...stripImages];

  return (
    <div className="overflow-hidden carousel-hover-pause">
      <div className="flex w-max animate-marquee [--duration:70s]">
        {doubled.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="mr-3 shrink-0 overflow-hidden rounded-xl bg-white/[0.04]"
          >
            <Image
              src={img.src}
              alt=""
              width={img.w}
              height={img.h}
              quality={90}
              className="h-[220px] w-auto object-cover"
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
    <section className="band grain relative -mt-px overflow-hidden rounded-b-[2rem] px-4 pb-4 md:px-6 md:pb-6">
      <AnimateIn variant="fadeIn">
        {/* Mobile — horizontal film strip */}
        <div className="md:hidden">
          <MobileFilmStrip />
        </div>

        {/* Desktop — four vertical marquee columns */}
        <div className="hidden md:block h-[520px] overflow-hidden">
          <div className="flex h-full carousel-hover-pause">
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
