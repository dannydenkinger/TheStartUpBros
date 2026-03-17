import { TechBrandsMarquee } from "@/components/landing/TechBrandsMarquee";
import { GlassBlogCard } from "@/components/shared/GlassBlogCard";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Badge } from "@/components/ui/badge";

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const industryName = resolvedParams.slug.replace("-", " ").toUpperCase();

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Industry Hero */}
      <section className="px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-20 text-center flex flex-col items-center justify-center">
        <Badge variant="secondary" className="mb-6">{industryName}</Badge>
        <h1 className="text-display max-w-4xl mx-auto mb-6 text-foreground capitalize">
          Unforgettable Website & UX Design For {industryName}
        </h1>
        <p className="text-body-lg max-w-2xl mx-auto text-muted-foreground mb-10">
          We help fast-scaling {industryName} companies acquire more users, reduce churn, and build undeniable trust.
        </p>
        <a href="/contact" className="badge-bricx hover:bg-secondary transition-colors inline-flex items-center justify-center py-2 px-6">
          Book Strategy Call
        </a>
      </section>

      {/* Marquee */}
      <TechBrandsMarquee />

      {/* Case Studies Grid */}
      <section className="px-6 lg:px-10 py-20 md:py-28 bg-secondary/30">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-foreground">Featured {industryName} Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            <GlassBlogCard 
              tags={[industryName, "UI/UX"]} 
              title={`Disrupting the ${industryName} space`}
              image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
            />
            <GlassBlogCard 
              tags={[industryName, "Design System"]}
              title={`Scaling ${industryName} Platforms`}
              image="https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&q=80"
            />
            <GlassBlogCard 
              tags={[industryName, "Web Design"]}
              title={`High-Converting ${industryName} Landing Pages`}
              image="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80"
            />
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
