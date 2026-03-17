import { GlassBlogCard } from "@/components/shared/GlassBlogCard";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Blog | Startup Bros",
  description: "Case studies, insights, and lessons from building AI-powered MVPs for lean startups.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Blog Hero */}
      <section className="px-6 lg:px-10 pt-[180px] pb-[100px] text-center flex flex-col items-center justify-center border-b border-border/40">
        <Badge variant="secondary" className="mb-6 invisible">Insights &amp; Guides</Badge>

        <h1 className="text-display mt-8 mb-4 max-w-4xl mx-auto text-foreground">
          Blog &amp; Case Studies
        </h1>
        <p className="text-body-lg max-w-2xl mx-auto text-muted-foreground mb-12">
          Lessons from the trenches of rapid product development.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="px-6 lg:px-10 py-20 md:py-28 bg-secondary/10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center max-w-4xl mx-auto">
            <GlassBlogCard
              className="max-w-full w-full"
              title="From Idea to MVP in 14 Days"
              excerpt="How we took a founder's napkin sketch and turned it into a deployed, revenue-ready SaaS product in just two weeks."
              tags={["Case Study", "SaaS"]}
              image="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80"
              href="/blog/from-idea-to-mvp-in-14-days"
            />
            <GlassBlogCard
              className="max-w-full w-full"
              title="Winning AI Pricing Pages"
              excerpt="A complete breakdown of how top AI tools structure their pricing for maximum conversion."
              tags={["Pricing", "Strategy"]}
              image="https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&q=80"
              href="/blog/from-idea-to-mvp-in-14-days"
            />
            <GlassBlogCard
              className="max-w-full w-full"
              title="The Anatomy of a Perfect Dashboard"
              excerpt="Learn how to design dense data tables and analytics dashboards without overwhelming the user."
              tags={["UI Design", "Dashboards"]}
              image="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80"
              href="/blog/from-idea-to-mvp-in-14-days"
            />
            <GlassBlogCard
              className="max-w-full w-full"
              title="Design System Foundations"
              excerpt="How to setup a scalable Figma design system for a growing engineering team."
              tags={["Design Systems", "Figma"]}
              image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
              href="/blog/from-idea-to-mvp-in-14-days"
            />
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
