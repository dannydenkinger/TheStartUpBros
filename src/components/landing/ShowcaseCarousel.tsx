"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/shared/AnimateIn";

// Distribute images across 4 columns — each column gets 2-3 images, duplicated for infinite loop
const col1 = [
  { src: "/images/portfolio/geo-analytics.avif", w: 512, h: 492 },
  { src: "/images/portfolio/ai-finance.avif", w: 512, h: 321 },
  { src: "/images/portfolio/thrust-mobile.avif", w: 512, h: 289 },
];
const col2 = [
  { src: "/images/portfolio/sales-dashboard.avif", w: 512, h: 512 },
  { src: "/images/portfolio/socialsonic.avif", w: 656, h: 796 },
  { src: "/images/portfolio/multichain.avif", w: 512, h: 512 },
];
const col3 = [
  { src: "/images/portfolio/token-platform.avif", w: 488, h: 447 },
  { src: "/images/portfolio/ai-visits.avif", w: 512, h: 372 },
  { src: "/images/portfolio/community-search.avif", w: 488, h: 363 },
];
const col4 = [
  { src: "/images/portfolio/thrust-web.avif", w: 512, h: 424 },
  { src: "/images/portfolio/ai-finance.avif", w: 512, h: 321 },
  { src: "/images/portfolio/geo-analytics.avif", w: 512, h: 492 },
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
    <div className="relative flex-1 overflow-hidden rounded-2xl" style={{ height: 780 }}>
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
            className="shrink-0 overflow-hidden rounded-2xl border border-[#e3e3e3] bg-white"
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
        <div className="bg-[#ededed] rounded-none md:rounded-3xl mx-0 md:mx-6 lg:mx-10 p-3">
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
