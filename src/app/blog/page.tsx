import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GlassBlogCard } from "@/components/shared/GlassBlogCard";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { RevealText } from "@/components/shared/RevealText";
import { FinalCTA } from "@/components/landing/FinalCTA";

export const metadata = {
  title: "Blog — MVP, App Development & Startup Insights",
  description:
    "Playbooks and lessons from building MVPs: scoping, shipping in weeks, pricing, design systems, and what actually matters before launch.",
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
      <section className="px-6 md:px-10 pt-12 md:pt-24 pb-10 md:pb-16">
        <div className="max-w-[1600px] mx-auto">
          <AnimateIn variant="fadeUp">
            <span className="badge-pill text-micro-label mb-8 inline-flex">
              <span aria-hidden className="label-dot" />
              <span className="lowercase">Blog</span>
            </span>
          </AnimateIn>
          <div className="grid grid-cols-12 gap-6">
          <h1 className="col-span-12 lg:col-span-8 text-display text-foreground">
            <RevealText delay={0.08}>
              Blog &amp; Case <span className="accent-word">Studies</span>
            </RevealText>
          </h1>
          <AnimateIn
            variant="fadeUp"
            delay={0.12}
            className="col-span-12 lg:col-start-9 lg:col-span-4 lg:self-end"
          >
            <p className="text-body-lg text-muted-foreground">
              Lessons from the trenches of rapid product development.
            </p>
          </AnimateIn>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="px-6 md:px-10 pb-16 md:pb-32 pt-4 md:pt-8">
        <div className="max-w-[1600px] mx-auto">
          {featured && (
            <AnimateIn variant="scaleIn">
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
            </AnimateIn>
          )}

          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-8">
              {/* Row-wise stagger: the modulo is the column count at xl, so
               * each row deals left→right instead of the whole grid landing
               * at once. Capped at three so late rows never feel laggy. */}
              {rest.map((post, i) => (
                <AnimateIn
                  key={post.slug}
                  delay={(i % 3) * 0.08}
                  className="h-full"
                >
                  <GlassBlogCard
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
                </AnimateIn>
              ))}
            </div>
          )}
        </div>
      </section>

      <FinalCTA index={null} />
    </div>
  );
}
