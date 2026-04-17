import { CaseStudiesGrid } from "@/components/portfolio/CaseStudiesGrid";
import { FinalCTA } from "@/components/landing/FinalCTA";

export const metadata = {
  title: "Case Studies | StartUpBros",
  description: "50+ apps, websites, and software products built for startups across 30+ industries.",
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-6 lg:px-10 pt-[140px] pb-[60px] text-center flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="badge-pill flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            50+ Projects Shipped
          </div>
          <div className="badge-pill flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            30+ Industries
          </div>
        </div>

        <h1 className="text-display mt-8 mb-4">Portfolio</h1>
        <p className="text-body-lg max-w-[600px] mb-12 mx-auto">
          Full-stack apps, websites, and software built for startups across every vertical. Here&apos;s what we&apos;ve shipped.
        </p>

        <h1 className="text-display max-w-[900px] mx-auto text-foreground font-medium">
          50+ Products Built For Startups
        </h1>
      </section>

      {/* Embedded Filter & Grid */}
      <CaseStudiesGrid />
      
      <FinalCTA />
    </div>
  );
}
