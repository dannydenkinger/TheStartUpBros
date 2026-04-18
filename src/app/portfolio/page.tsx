import { CaseStudiesGrid } from "@/components/portfolio/CaseStudiesGrid";
import { FinalCTA } from "@/components/landing/FinalCTA";

export const metadata = {
  title: "Design Studies | Startup Bros",
  description: "Design studies and concept work — B2B and AI SaaS deep-dives by the Denkinger brothers.",
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-6 lg:px-10 pt-[140px] pb-[60px] text-center flex flex-col items-center justify-center border-b border-border/40">
        <span className="badge-pill mb-6 inline-block" style={{ borderColor: 'var(--accent-brand-glow)', background: 'var(--accent-brand-soft)' }}>Case Studies</span>
        <h1 className="text-display mb-4 max-w-4xl mx-auto text-foreground">
          Design <span style={{ color: 'var(--accent-brand)' }}>Studies</span>
        </h1>
        <p className="text-body-lg max-w-[600px] mx-auto text-muted-foreground">
          Deep-dives from the kind of fast-moving B2B and AI SaaS we build.
        </p>
      </section>

      {/* Embedded Filter & Grid */}
      <CaseStudiesGrid />
      
      <FinalCTA />
    </div>
  );
}
