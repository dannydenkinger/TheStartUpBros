import { CaseStudiesGrid } from "@/components/portfolio/CaseStudiesGrid";
import { FinalCTA } from "@/components/landing/FinalCTA";

export const metadata = {
  title: "Design Studies | Startup Bros",
  description: "Design studies and concept work — B2B and AI SaaS deep-dives by the Denkinger brothers.",
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-14 md:pb-16">
        <div className="mx-auto max-w-[1360px] px-6 md:px-10">
          <span className="badge-pill mb-8 inline-flex">
            <span aria-hidden className="size-1.5 bg-(--accent-brand)" />
            Case Studies
          </span>
          <div className="grid grid-cols-12 gap-6">
            <h1 className="col-span-12 lg:col-span-7 text-display text-foreground">
              Design <span className="accent-word">Studies</span>
            </h1>
            <p className="col-span-12 lg:col-start-9 lg:col-span-4 lg:self-end text-body-lg text-muted-foreground">
              Deep-dives from the kind of fast-moving B2B and AI SaaS we build.
            </p>
          </div>
        </div>
      </section>

      {/* The Ledger */}
      <CaseStudiesGrid />

      <FinalCTA index="06" />
    </div>
  );
}
