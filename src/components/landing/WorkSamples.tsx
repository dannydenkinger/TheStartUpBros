import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { getImageStyle, getWrapperStyle } from "@/lib/imagePosition";

// Curated gallery — image-only showcase, no per-item navigation.
// Mix of dashboards, mobile mockups, and landing pages for visual variety.
const galleryImages = [
  "/images/portfolio/vesta-hero.png",
  "/images/portfolio/hotel-booking-landing.webp",
  "/images/portfolio/zonex-dashboard.webp",
  "/images/portfolio/ecommerce-overview.webp",
  "/images/portfolio/estateflow-dashboard.png",
  "/images/portfolio/snack-app-mobile.webp",
  "/images/portfolio/said-hero-brand.webp",
  "/images/portfolio/property-ipad.webp",
  "/images/portfolio/zonex-film.webp",
  "/images/portfolio/taskapp-dashboard.webp",
  "/images/portfolio/estateflow-properties.png",
  "/images/portfolio/ai-pattern-landing.webp",
  "/images/portfolio/defi-landing.webp",
  "/images/portfolio/aerion-landing.webp",
  "/images/portfolio/wallet-app-mobile.webp",
  "/images/portfolio/cms-tablet.webp",
];

// Two counter-scrolling rows
const topRow = galleryImages.slice(0, galleryImages.length / 2);
const bottomRow = galleryImages.slice(galleryImages.length / 2);

// Edge fade — same mask used by Testimonials / components/shared/Marquee.tsx
const edgeFadeMask: CSSProperties = {
  maskImage:
    "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
};

function Tile({ src }: { src: string }) {
  return (
    <div className="group relative aspect-[4/3] w-[260px] md:w-[400px] shrink-0 rounded-2xl overflow-hidden isolate bg-card">
      <div className="absolute inset-0 overflow-hidden" style={getWrapperStyle(src)}>
        <Image
          src={src}
          alt=""
          fill
          quality={90}
          sizes="(max-width: 768px) 260px, 400px"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          style={getImageStyle(src)}
        />
      </div>
    </div>
  );
}

function MarqueeRow({
  images,
  reverse,
  duration,
}: {
  images: string[];
  reverse?: boolean;
  duration: number;
}) {
  return (
    <div className="relative flex w-full overflow-hidden" style={edgeFadeMask}>
      {/* Parks on hover so the tile you're looking at — and its slow zoom —
       * holds still instead of sliding away mid-gesture. */}
      <div
        className={`flex w-max [&>*]:mr-3 md:[&>*]:mr-4 hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ ["--duration" as string]: `${duration}s` }}
      >
        {[...images, ...images].map((src, i) => (
          <Tile key={`${src}-${i}`} src={src} />
        ))}
      </div>
    </div>
  );
}

export function WorkSamples() {
  return (
    <section className="py-14 md:py-28 bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <AnimateIn>
          {/* Divider row — dot label left, gallery link right (desses) */}
          <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
            <span className="badge-pill text-micro-label">
              <span aria-hidden className="label-dot" />
              <span className="sr-only">05 · </span>
              <span className="lowercase">WORK SAMPLES</span>
            </span>
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-foreground transition-colors duration-200 hover:text-muted-foreground"
            >
              View Full Gallery
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-6 mt-10 md:mt-14 mb-10 md:mb-16">
            <h2 className="col-span-12 lg:col-span-7 text-h2">
              Work <span className="accent-word">Samples</span>
            </h2>
          </div>
        </AnimateIn>
      </div>

      {/* Full-bleed marquee wall — two counter-scrolling rows */}
      <div className="flex flex-col gap-3 md:gap-4">
        <MarqueeRow images={topRow} duration={55} />
        <MarqueeRow images={bottomRow} reverse duration={62} />
      </div>
    </section>
  );
}
