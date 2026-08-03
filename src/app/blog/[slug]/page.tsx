import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { BlogTableOfContents } from "@/components/blog/BlogTableOfContents";
import { BlogShareBar } from "@/components/blog/BlogShareBar";
import { Plate } from "@/components/shared/Plate";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { RevealText } from "@/components/shared/RevealText";
import { GlassBlogCard } from "@/components/shared/GlassBlogCard";
import { FinalCTA } from "@/components/landing/FinalCTA";

const contentDir = path.join(process.cwd(), "src/content/blog");

function getPost(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}

function getAllPosts() {
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
  return files.map((f) => {
    const raw = fs.readFileSync(path.join(contentDir, f), "utf-8");
    const { data } = matter(raw);
    return { slug: f.replace(".mdx", ""), ...data };
  });
}

export function generateStaticParams() {
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
  return files.map((f) => ({ slug: f.replace(".mdx", "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.frontmatter.title} — StartUp Bros Blog`,
    description: post.frontmatter.description,
  };
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n: string) => n[0])
    .join("");
}

/* Pull-quotes as flat tonal panels with a blurple label-dot — the system's
 * card language instead of the classic left-border blockquote. */
const mdxComponents = {
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="not-prose my-5 rounded-2xl bg-card px-6 py-5 md:px-7 md:py-6">
      <span aria-hidden className="label-dot block mb-4" />
      <div className="[&_p]:m-0 [&_p]:text-[17px] [&_p]:leading-[1.65] [&_p]:text-foreground/80 [&_p+p]:mt-3">
        {children}
      </div>
    </blockquote>
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { frontmatter, content } = post;

  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get related posts (excluding current)
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p: any) => p.slug !== slug)
    .slice(0, 3);

  return (
    <article className="min-h-screen">
      {/* Post hero — editorial opening on the shared 1600 container */}
      <header className="px-6 md:px-10 pt-8 md:pt-12">
        <div className="mx-auto max-w-[1600px]">
          {/* Back link */}
          <AnimateIn variant="fadeUp">
            <Link
              href="/blog"
              className="group inline-flex items-baseline gap-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <span
                aria-hidden
                className="group-hover:-translate-x-0.5 transition-transform duration-200"
              >
                ←
              </span>
              Blog
            </Link>
          </AnimateIn>

          <div className="mt-12 md:mt-16 grid grid-cols-12 gap-x-6 gap-y-8">
            {/* Category — borderless dot label */}
            {frontmatter.category && (
              <AnimateIn variant="fadeUp" className="col-span-12">
                <span className="badge-pill text-micro-label">
                  <span aria-hidden className="label-dot" />
                  <span className="lowercase">{frontmatter.category}</span>
                </span>
              </AnimateIn>
            )}

            {/* Title */}
            <h1 className="col-span-12 lg:col-span-8 text-display text-balance">
              <RevealText delay={0.08}>{frontmatter.title}</RevealText>
            </h1>

            {/* Standfirst */}
            {frontmatter.description && (
              <AnimateIn
                variant="fadeUp"
                delay={0.14}
                className="col-span-12 lg:col-start-9 lg:col-span-4 lg:self-end"
              >
                <p className="text-body-lg text-muted-foreground max-w-[480px]">
                  {frontmatter.description}
                </p>
              </AnimateIn>
            )}
          </div>

          {/* Meta — one quiet line */}
          <AnimateIn variant="fadeUp" delay={0.18}>
            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="flex items-center gap-3">
                <span className="size-8 rounded-full bg-card grid place-items-center text-[11px] font-medium text-foreground">
                  {initials(frontmatter.author || "SB")}
                </span>
                <p className="text-[14px] font-medium text-foreground">
                  {frontmatter.author || "StartUp Bros"}
                </p>
                {frontmatter.authorRole && (
                  <>
                    <span
                      aria-hidden
                      className="text-[13px] text-muted-foreground/60"
                    >
                      ·
                    </span>
                    <p className="text-[13px] text-muted-foreground">
                      {frontmatter.authorRole}
                    </p>
                  </>
                )}
              </span>
              <span
                aria-hidden
                className="hidden sm:block text-[13px] text-muted-foreground/60"
              >
                ·
              </span>
              <span className="flex items-center gap-3">
                <p className="text-[13px] text-muted-foreground">
                  {formattedDate}
                </p>
                {frontmatter.readTime && (
                  <>
                    <span
                      aria-hidden
                      className="text-[13px] text-muted-foreground/60"
                    >
                      ·
                    </span>
                    <p className="text-[13px] text-muted-foreground">
                      {frontmatter.readTime}
                    </p>
                  </>
                )}
              </span>
            </div>
          </AnimateIn>
        </div>
      </header>

      {/* Hero plate — full-container editorial media */}
      <div className="px-6 md:px-10 mt-12 md:mt-16">
        <div className="mx-auto max-w-[1600px]">
          <AnimateIn variant="fadeUp" delay={0.1}>
            {frontmatter.image ? (
              <Plate caption={frontmatter.category || slug} fig="01">
                <div className="aspect-[16/10] md:aspect-[21/9]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={frontmatter.image}
                    alt={frontmatter.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Plate>
            ) : (
              <div className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-[20px] bg-card p-8">
                <p
                  aria-hidden
                  className="select-none text-[clamp(4rem,10vw,9rem)] font-medium leading-[1.05] tracking-[-0.025em] text-foreground/[0.06] -translate-x-2 translate-y-2"
                >
                  {frontmatter.title}
                </p>
                <p className="absolute bottom-6 left-8 text-xs text-muted-foreground">
                  FIG. 00{frontmatter.category ? ` — ${frontmatter.category}` : ""}
                </p>
              </div>
            )}
          </AnimateIn>
        </div>
      </div>

      {/* Reading measure — 680px prose with anchored ToC rail */}
      <div className="px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="mx-auto max-w-[1080px]">
          <div className="lg:flex lg:justify-between lg:gap-16">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-[680px]" data-blog-content>
              <div
                className="
                  prose max-w-none
                  prose-headings:font-sans prose-headings:font-medium prose-headings:tracking-[-0.025em] prose-headings:text-foreground
                  prose-h2:text-[28px] prose-h2:leading-[1.2] prose-h2:mt-14 prose-h2:mb-5
                  prose-h3:text-[21px] prose-h3:leading-[1.3] prose-h3:mt-10 prose-h3:mb-3
                  prose-p:text-[17px] prose-p:leading-[1.75] prose-p:text-foreground/80
                  prose-li:text-[17px] prose-li:leading-[1.7] prose-li:text-foreground/80
                  prose-li:my-1.5
                  prose-li:marker:text-muted-foreground
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-a:text-(--accent-brand) prose-a:font-medium prose-a:no-underline
                  prose-a:[background-image:linear-gradient(var(--accent-brand),var(--accent-brand))]
                  prose-a:[background-repeat:no-repeat]
                  prose-a:[background-position:0_100%]
                  prose-a:[background-size:0%_2px]
                  prose-a:[transition:background-size_250ms_ease-out]
                  hover:prose-a:[background-size:100%_2px]
                  prose-code:text-[13px] prose-code:text-foreground prose-code:bg-card prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-card prose-pre:text-foreground prose-pre:border-0 prose-pre:rounded-2xl prose-pre:px-6 prose-pre:py-5
                  prose-hr:border-border prose-hr:my-12
                  prose-img:rounded-2xl
                  prose-ol:pl-5 prose-ul:pl-5
                "
              >
                <MDXRemote source={content} components={mdxComponents} />
              </div>

              {/* Tags */}
              {frontmatter.tags && frontmatter.tags.length > 0 && (
                <div className="mt-14 pt-8 border-t border-border/60">
                  <p className="text-micro-label text-muted-foreground mb-3">
                    Topics
                  </p>
                  <div className="flex flex-wrap items-baseline gap-y-1">
                    {frontmatter.tags.map((tag: string, i: number) => (
                      <span
                        key={tag}
                        className="text-[13px] font-medium text-(--accent-brand)"
                      >
                        {tag}
                        {i < frontmatter.tags.length - 1 && (
                          <span
                            aria-hidden
                            className="mx-2 font-normal text-muted-foreground"
                          >
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author sign-off */}
              <div className="mt-10 pt-8 border-t border-border/60 flex flex-wrap items-center justify-between gap-x-6 gap-y-6">
                <div className="flex items-center gap-4">
                  <span className="size-11 rounded-full bg-card grid place-items-center text-[13px] font-medium text-foreground">
                    {initials(frontmatter.author || "SB")}
                  </span>
                  <span>
                    <p className="text-[15px] font-medium text-foreground leading-tight">
                      {frontmatter.author || "StartUp Bros"}
                    </p>
                    {frontmatter.authorRole && (
                      <p className="text-[13px] text-muted-foreground mt-0.5">
                        {frontmatter.authorRole}
                      </p>
                    )}
                  </span>
                </div>
                {/* Share — mobile / tablet (desktop lives in the rail) */}
                <div className="lg:hidden">
                  <BlogShareBar title={frontmatter.title} />
                </div>
              </div>
            </div>

            {/* Anchored rail — ToC + share */}
            <aside className="hidden lg:block w-[240px] shrink-0">
              <div className="sticky top-28">
                <BlogTableOfContents />
                <div className="mt-10 pt-8 border-t border-border/60 pl-4">
                  <BlogShareBar title={frontmatter.title} variant="rail" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="px-6 md:px-10 pb-24 md:pb-32">
          <div className="mx-auto max-w-[1600px]">
            <h2 className="text-h2 text-foreground mb-10 md:mb-14">
              <RevealText>Continue Reading</RevealText>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {relatedPosts.map((related: any, index: number) => (
                <GlassBlogCard
                  key={related.slug}
                  figIndex={index + 1}
                  title={related.title}
                  excerpt={related.description}
                  category={related.category}
                  image={related.image}
                  href={`/blog/${related.slug}`}
                  readTime={related.readTime}
                  date={new Date(related.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA index={null} />
    </article>
  );
}
