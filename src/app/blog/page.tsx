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
  author?: string;
  authorRole?: string;
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
        author: data.author,
        authorRole: data.authorRole,
      };
    })
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Blog Hero */}
      <section className="px-6 md:px-10 pt-16 md:pt-24 pb-16">
        <div className="max-w-[1600px] mx-auto">
          <span className="badge-pill text-micro-label mb-8 inline-flex">
            <span aria-hidden className="label-dot" />
            <span className="lowercase">Blog</span>
          </span>
          <div className="grid grid-cols-12 gap-6">
          <h1 className="col-span-12 lg:col-span-8 text-display text-foreground">
            Blog &amp; Case <span className="accent-word">Studies</span>
          </h1>
          <p className="col-span-12 lg:col-start-9 lg:col-span-4 lg:self-end text-body-lg text-muted-foreground">
            Lessons from the trenches of rapid product development.
          </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="px-6 md:px-10 pb-24 md:pb-32 pt-8">
        <div className="max-w-[1600px] mx-auto">
          {featured && (
            <GlassBlogCard
              featured
              figIndex={1}
              title={featured.title}
              excerpt={featured.description}
              category={featured.category}
              image={featured.image}
              href={`/blog/${featured.slug}`}
              readTime={featured.readTime}
              author={featured.author}
              authorRole={featured.authorRole}
              date={formatDate(featured.date)}
            />
          )}

          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-8">
              {rest.map((post, i) => (
                <GlassBlogCard
                  key={post.slug}
                  figIndex={i + 2}
                  title={post.title}
                  excerpt={post.description}
                  category={post.category}
                  image={post.image}
                  href={`/blog/${post.slug}`}
                  readTime={post.readTime}
                  author={post.author}
                  authorRole={post.authorRole}
                  date={formatDate(post.date)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <FinalCTA index={null} />
    </div>
  );
}
