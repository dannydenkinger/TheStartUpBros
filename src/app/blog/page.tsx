import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BlogCard } from "@/components/blog/BlogCard";
import type { BlogPost } from "@/types";

// For now, blog posts are defined inline. When you add more MDX files,
// extract this to a lib/blog.ts that reads from the content directory.
const posts: BlogPost[] = [
  {
    slug: "from-idea-to-mvp-in-14-days",
    title: "From Idea to MVP in 14 Days: A Real-World Case Study",
    description:
      "How we took a founder's napkin sketch and turned it into a deployed, revenue-ready SaaS product in just two weeks.",
    date: "2026-03-01",
    tags: ["Case Study", "SaaS", "MVP"],
  },
];

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Case studies, insights, and lessons from building AI-powered MVPs for lean startups.",
};

export default function BlogPage() {
  return (
    <section className="px-6 lg:px-10 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          title="Blog & Case Studies"
          subtitle="Lessons from the trenches of rapid product development."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
