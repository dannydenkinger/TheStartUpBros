import Image from "next/image";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
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
    <section className="px-6 md:px-10 py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-[1360px]">
        <AnimateIn>
          <SectionHeader
            index="05"
            label="WORK SAMPLES"
            title={
              <>
                Work <span className="accent-word">Samples</span>
              </>
            }
          />
        </AnimateIn>

        {/* Uniform 4:3 grid — matches /gallery layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 isolate">
          {galleryImages.map((src) => (
            <div
              key={src}
              className="group relative aspect-[4/3] rounded-[16px] overflow-hidden isolate bg-card shadow-(--shadow-plate)"
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
          <div className="mt-14">
            <CTAButton href="/gallery" variant="primary">
              View Full Gallery
            </CTAButton>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
