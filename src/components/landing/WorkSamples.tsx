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

export function WorkSamples() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <AnimateIn>
        <div className="text-center mb-16 px-6 lg:px-10">
          <h2 className="text-display mb-4">Work <span style={{ color: 'var(--accent-brand)' }}>Samples</span></h2>
        </div>
      </AnimateIn>

      {/* Uniform 4:3 grid — matches /gallery layout */}
      <div className="px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 isolate">
        {galleryImages.map((src) => (
          <div
            key={src}
            className="relative aspect-[4/3] rounded-2xl border border-border bg-card shadow-sm group overflow-hidden isolate"
          >
            <div className="absolute inset-0 overflow-hidden" style={getWrapperStyle(src)}>
              <Image
                src={src}
                alt=""
                fill
                quality={90}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                style={getImageStyle(src)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* View More CTA → /gallery */}
      <AnimateIn delay={0.15}>
        <div className="text-center mt-14 px-6 lg:px-10">
          <Link href="/gallery" className="btn-pill btn-pill-primary">
            View Full Gallery
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </AnimateIn>
    </section>
  );
}
