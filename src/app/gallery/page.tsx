import Image from "next/image";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { getImageStyle } from "@/lib/imagePosition";

export const metadata = {
  title: "Gallery | StartUpBros",
  description:
    "A showcase of our recent product, dashboard, and landing page work — dashboards, AI tools, mobile apps, and web3 surfaces.",
};

// Every screenshot available, shuffled for visual rhythm (dashboards, mobiles, landings interleaved)
const galleryImages = [
  "/images/portfolio/vesta-hero.png",
  "/images/portfolio/zonex-dashboard.webp",
  "/images/portfolio/estateflow-dashboard.png",
  "/images/portfolio/ai-landing.webp",
  "/images/portfolio/vesta-calendar.png",
  "/images/portfolio/zonex-film.webp",
  "/images/portfolio/estateflow-properties.png",
  "/images/portfolio/defi-landing.webp",
  "/images/portfolio/vesta-analytics.png",
  "/images/portfolio/zonex-coaching.webp",
  "/images/portfolio/estateflow-tenants.png",
  "/images/portfolio/geo-analytics.avif",
  "/images/portfolio/vesta-seo.png",
  "/images/portfolio/multichain.avif",
  "/images/portfolio/estateflow-leasing.png",
  "/images/portfolio/zonex-game-data.webp",
  "/images/portfolio/vesta-login.png",
  "/images/portfolio/estateflow-documents.png",
  "/images/portfolio/fintech-dashboard.webp",
  "/images/portfolio/community-search.avif",
  "/images/portfolio/estateflow-finance.png",
  "/images/portfolio/ai-finance.avif",
  "/images/portfolio/defi-pages.webp",
  "/images/portfolio/estateflow-market.png",
  "/images/portfolio/thrust-web.avif",
  "/images/portfolio/sales-crm-detail.webp",
  "/images/portfolio/crm-dashboard.webp",
  "/images/portfolio/fintech-app-duo.webp",
  "/images/portfolio/crm-journeys.webp",
  "/images/portfolio/sales-crm-full.webp",
  "/images/portfolio/token-platform.avif",
  "/images/portfolio/sales-crm-perspective.webp",
  "/images/portfolio/fintech-detail.webp",
  "/images/portfolio/fintech-transactions.webp",
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
        <div className="px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {galleryImages.map((src) => (
            <div
              key={src}
              className="relative aspect-[4/3] rounded-2xl border border-border bg-card shadow-sm p-9 group"
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt=""
                  fill
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
