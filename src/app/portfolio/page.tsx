import { CaseStudiesGrid } from "@/components/portfolio/CaseStudiesGrid";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { projects } from "@/data/portfolio";

export const metadata = {
  title: "Design Studies | Startup Bros",
  description: "Design studies and concept work — B2B and AI SaaS deep-dives by the Denkinger brothers.",
};

// Derived from the project data — count + year range.
const years = projects
  .map((p) => Number(p.year))
  .filter((y) => Number.isFinite(y));
const projectCount = String(projects.length).padStart(2, "0");
const yearRange =
  years.length > 0 ? `${Math.min(...years)}–${Math.max(...years)}` : null;

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <span className="badge-pill text-micro-label mb-8 inline-flex">
            <span aria-hidden className="label-dot" />
            <span className="lowercase">Case Studies</span>
          </span>
          <div className="grid grid-cols-12 gap-x-6 gap-y-8">
            <h1 className="col-span-12 lg:col-span-8 text-display text-foreground">
              Design <span className="accent-word">Studies</span>
            </h1>
            <div className="col-span-12 lg:col-start-9 lg:col-span-4 lg:self-end">
              <p className="text-body-lg text-muted-foreground max-w-[440px]">
                Deep-dives from the kind of fast-moving B2B and AI SaaS we
                build.
              </p>
              <p className="mt-5 text-[13px] text-muted-foreground/80 tabular-nums">
                {projectCount} projects{yearRange && <> · {yearRange}</>}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Ledger */}
      <CaseStudiesGrid />

      <FinalCTA index="06" />
    </div>
  );
}
