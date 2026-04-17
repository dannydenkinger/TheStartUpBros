import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GlassBlogCard } from "@/components/shared/GlassBlogCard";
import { FinalCTA } from "@/components/landing/FinalCTA";

export const metadata = {
  title: "Blog | StartUpBros",
  description:
    "Case studies, insights, and lessons from building apps and software for startups.",
};

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  tags?: string[];
  category?: string;
  readTime?: string;
};

function getAllPosts(): BlogPost[] {
  const contentDir = path.join(process.cwd(), "src/content/blog");
  if (!fs.existsSync(contentDir)) return [];

  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(contentDir, f), "utf-8");
      const { data } = matter(raw);
      return {
        slug: f.replace(".mdx", ""),
        title: data.title,
        description: data.description,
        date: data.date,
        image: data.image,
        tags: data.tags ?? [],
        category: data.category,
        readTime: data.readTime,
      };
    })
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Blog Hero */}
      <section className="px-6 lg:px-10 pt-[140px] pb-[60px] text-center flex flex-col items-center justify-center border-b border-border/40">
        <h1 className="text-display mb-4 max-w-4xl mx-auto text-foreground">
          Blog &amp; Case Studies
        </h1>
        <p className="text-body-lg max-w-2xl mx-auto text-muted-foreground">
          Lessons from the trenches of rapid product development.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="px-6 lg:px-10 py-20 md:py-28 bg-secondary/10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {posts.map((post) => (
              <GlassBlogCard
                key={post.slug}
                className="max-w-full w-full"
                title={post.title}
                excerpt={post.description}
                tags={post.tags}
                image={post.image}
                href={`/blog/${post.slug}`}
                readTime={post.readTime}
                date={new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
