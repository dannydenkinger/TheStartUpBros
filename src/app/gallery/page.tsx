import Image from "next/image";
import { FinalCTA } from "@/components/landing/FinalCTA";
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

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero */}
      <section className="px-6 lg:px-10 pt-[140px] pb-[60px] text-center flex flex-col items-center justify-center border-b border-border/40">
        <h1 className="text-display mt-8 mb-4 max-w-4xl mx-auto text-foreground">
          <span style={{ color: 'var(--accent-brand)' }}>Gallery</span>
        </h1>
        <p className="text-body-lg max-w-2xl mx-auto text-muted-foreground">
          A visual tour of our product, dashboard, mobile, and web3 work.
        </p>
      </section>

      {/* Uniform grid — every tile is the same aspect ratio & size */}
      <section className="py-16 md:py-20">
        <div className="px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {galleryImages.map((src) => (
            <div
              key={src}
              className="relative aspect-[4/3] rounded-2xl border border-border bg-card shadow-sm p-4 group overflow-hidden"
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl" style={getWrapperStyle(src)}>
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
      </section>

      <FinalCTA />
    </div>
  );
}
