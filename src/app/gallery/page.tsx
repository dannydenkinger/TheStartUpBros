import Image from "next/image";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { RevealText } from "@/components/shared/RevealText";
import { getImageStyle, getWrapperStyle } from "@/lib/imagePosition";

export const metadata = {
  title: "Gallery | StartUpBros",
  description:
    "A showcase of our recent product, dashboard, and landing page work — dashboards, AI tools, mobile apps, and web3 surfaces.",
};

// Every screenshot available, shuffled for visual rhythm (dashboards, mobiles, landings interleaved)
const galleryImages = [
  // Alternating dark ↔ light for visual rhythm
  "/images/portfolio/vesta-hero.png",              // dark
  "/images/portfolio/hotel-booking-landing.webp",  // light
  "/images/portfolio/zonex-dashboard.webp",        // dark
  "/images/portfolio/ecommerce-overview.webp",     // light
  "/images/portfolio/estateflow-dashboard.png",    // dark
  "/images/portfolio/snack-app-mobile.webp",       // light
  "/images/portfolio/said-hero-brand.webp",        // dark
  "/images/portfolio/property-ipad.webp",          // light
  "/images/portfolio/zonex-film.webp",             // dark
  "/images/portfolio/taskapp-dashboard.webp",      // light
  "/images/portfolio/wallet-app-mobile.webp",      // dark
  "/images/portfolio/ai-pattern-landing.webp",     // light
  "/images/portfolio/estateflow-properties.png",   // dark
  "/images/portfolio/aerion-landing.webp",         // light
  "/images/portfolio/defi-landing.webp",           // dark
  "/images/portfolio/cms-tablet.webp",             // light
  "/images/portfolio/said-clinical.webp",          // dark
  "/images/portfolio/wallet-dashboard-light.webp", // light
  "/images/portfolio/analytics-dashboard-dark.webp", // dark
  "/images/portfolio/juice-landing.webp",          // light/red
  "/images/portfolio/estateflow-tenants.png",      // dark
  "/images/portfolio/health-tracker-mobile.webp",  // dark/teal
  "/images/portfolio/vesta-calendar.png",          // light
  "/images/portfolio/finance-app-dark.webp",       // dark
  "/images/portfolio/geo-analytics.avif",          // light
  "/images/portfolio/project-board-dark.webp",     // dark
  "/images/portfolio/vesta-seo.png",               // light
  "/images/portfolio/stock-market-dashboard.webp", // dark
  "/images/portfolio/zonex-coaching.webp",         // light
  "/images/portfolio/said-lineup.webp",            // dark
  "/images/portfolio/fintech-app-duo.webp",        // light
  "/images/portfolio/multichain.avif",             // dark
  "/images/portfolio/vesta-analytics.png",         // light
  "/images/portfolio/defi-pages.webp",             // dark
  "/images/portfolio/community-search.avif",       // light
  "/images/portfolio/estateflow-leasing.png",      // dark
  "/images/portfolio/crm-dashboard.webp",          // light
  "/images/portfolio/token-platform.avif",         // dark
  "/images/portfolio/fintech-dashboard.webp",      // light
  "/images/portfolio/ai-finance.avif",             // dark
  "/images/portfolio/sales-crm-detail.webp",       // light
  "/images/portfolio/estateflow-market.png",       // dark
  "/images/portfolio/sales-crm-full.webp",         // light
  "/images/portfolio/thrust-web.avif",             // dark
  "/images/portfolio/vesta-login.png",             // light
  "/images/portfolio/estateflow-documents.png",    // dark
  "/images/portfolio/sales-crm-perspective.webp",  // light
  "/images/portfolio/estateflow-finance.png",      // dark
  "/images/portfolio/fintech-detail.webp",         // light
  "/images/portfolio/fintech-transactions.webp",   // light
];

// Derived meta — count is computed from the data, never hand-typed.
const imageCount = String(galleryImages.length).padStart(2, "0");

// ── Editorial grid rhythm ────────────────────────────────────────────────
// A repeating 10-tile cycle on desktop keeps the grid calm but not uniform:
//   row 1 → wide + single      row 2 → single ×3
//   row 3 → single + wide      row 4 → single ×3
// The final tile stretches full-width when it would otherwise sit alone.
type TileSize = "single" | "wide" | "full";

function tileSize(i: number, total: number): TileSize {
  const pos = i % 10;
  const isWide = pos === 0 || pos === 6;
  if (i === total - 1 && pos === 0) return "full";
  return isWide ? "wide" : "single";
}

const tileSpan: Record<TileSize, string> = {
  single: "",
  wide: "lg:col-span-2",
  full: "lg:col-span-3",
};

const tileAspect: Record<TileSize, string> = {
  single: "aspect-[4/3]",
  wide: "aspect-[4/3] lg:aspect-[41/15]",
  full: "aspect-[4/3] lg:aspect-[21/5]",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-14 md:pb-16">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <AnimateIn variant="fadeUp">
            <span className="badge-pill text-micro-label mb-8 inline-flex">
              <span aria-hidden className="label-dot" />
              <span className="lowercase">Gallery</span>
            </span>
          </AnimateIn>
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <h1 className="col-span-12 lg:col-span-7 text-display text-foreground">
              <RevealText delay={0.08}>Gallery</RevealText>
            </h1>
            <div className="col-span-12 lg:col-start-9 lg:col-span-4 lg:self-end">
              <AnimateIn variant="fadeUp" delay={0.12}>
                <p className="text-body-lg text-muted-foreground max-w-[440px]">
                  A visual tour of our product, dashboard, mobile, and web3
                  work.
                </p>
                <p className="mt-5 text-[13px] text-muted-foreground/80 tabular-nums">
                  {imageCount} images
                </p>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial grid — repeating wide/single rhythm, every image kept */}
      <section className="pt-4 md:pt-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 isolate">
          {galleryImages.map((src, i) => {
            const size = tileSize(i, galleryImages.length);
            return (
              <AnimateIn
                key={src}
                variant="fadeUp"
                delay={(i % 3) * 0.06}
                className={tileSpan[size]}
              >
                <div className="group rounded-2xl overflow-hidden isolate bg-card shadow-none">
                  <div
                    className={`relative w-full overflow-hidden ${tileAspect[size]}`}
                  >
                    <div className="absolute inset-0" style={getWrapperStyle(src)}>
                      <Image
                        src={src}
                        alt=""
                        fill
                        quality={90}
                        sizes={
                          size === "single"
                            ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"
                        }
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                        style={getImageStyle(src)}
                      />
                    </div>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </section>

      <FinalCTA index={null} />
    </div>
  );
}
