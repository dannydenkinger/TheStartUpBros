import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { BlogTableOfContents } from "@/components/blog/BlogTableOfContents";
import { BlogShareBar } from "@/components/blog/BlogShareBar";

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
      {/* Hero header */}
      <header className="px-6 md:px-10 pt-12 pb-8">
        <div className="mx-auto max-w-[1080px]">
          {/* Back link */}
          <Link
            href="/blog"
            className="group inline-flex items-baseline gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground hover:text-foreground transition-colors duration-200 mb-10"
          >
            <span
              aria-hidden
              className="group-hover:-translate-x-0.5 transition-transform duration-200"
            >
              ←
            </span>
            Blog
          </Link>

          {/* Category tag */}
          {frontmatter.category && (
            <div className="mb-5">
              <span className="badge-pill">{frontmatter.category}</span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-h1 text-foreground max-w-[800px] mb-8">
            {frontmatter.title}
          </h1>

          {/* Author row */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full border border-border bg-secondary flex items-center justify-center font-mono text-[12px] text-foreground">
                {(frontmatter.author || "SB")
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-[14px] font-medium text-foreground">
                  {frontmatter.author || "StartUp Bros"}
                </p>
                {frontmatter.authorRole && (
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
                    {frontmatter.authorRole}
                  </p>
                )}
              </div>
            </div>

            <span className="w-px h-4 bg-border" />

            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
              {formattedDate}
            </p>

            {frontmatter.readTime && (
              <>
                <span className="w-px h-4 bg-border" />
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
                  {frontmatter.readTime}
                </p>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Description / intro */}
      {frontmatter.description && (
        <div className="px-6 md:px-10 pb-8">
          <div className="mx-auto max-w-[1080px]">
            <p className="text-body-lg text-muted-foreground max-w-[680px]">
              {frontmatter.description}
            </p>
          </div>
        </div>
      )}

      {/* Hero plate */}
      <div className="px-6 md:px-10 pb-12">
        <div className="mx-auto max-w-[1080px]">
          {frontmatter.image ? (
            <figure>
              <div className="rounded-md border border-border bg-secondary p-1.5 shadow-(--shadow-plate)">
                <div className="rounded-[4px] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={frontmatter.image}
                    alt={frontmatter.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <figcaption className="mt-2 flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
                <span>{frontmatter.category || slug}</span>
                <span
                  aria-hidden
                  className="flex-1 border-b border-dotted border-muted-foreground/40 -translate-y-[3px]"
                />
                <span className="whitespace-nowrap">FIG. 01</span>
              </figcaption>
            </figure>
          ) : (
            <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-border bg-secondary dark:bg-card p-8">
              <p className="font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] tracking-[-0.01em] text-foreground/15 max-w-[720px]">
                {frontmatter.title}
              </p>
              <p className="absolute bottom-6 left-8 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
                FIG. 00{frontmatter.category ? ` — ${frontmatter.category}` : ""}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Two-column content */}
      <div className="px-6 md:px-10 pb-20">
        <div className="mx-auto max-w-[1080px]">
          <div className="flex gap-16">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-[680px]" data-blog-content>
              <div
                className="
                  prose max-w-none
                  prose-headings:font-display prose-headings:font-normal prose-headings:tracking-[-0.01em] prose-headings:text-foreground
                  prose-h2:text-[28px] prose-h2:leading-[1.2] prose-h2:mt-12 prose-h2:mb-4
                  prose-h3:text-[22px] prose-h3:leading-[1.25] prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-[17px] prose-p:leading-[1.7] prose-p:text-foreground/80
                  prose-li:text-[17px] prose-li:leading-[1.7] prose-li:text-foreground/80
                  prose-li:marker:text-muted-foreground
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-a:text-foreground prose-a:font-medium prose-a:no-underline
                  prose-a:[background-image:linear-gradient(var(--accent-brand),var(--accent-brand))]
                  prose-a:[background-repeat:no-repeat]
                  prose-a:[background-position:0_100%]
                  prose-a:[background-size:0%_2px]
                  prose-a:[transition:background-size_250ms_ease-out]
                  hover:prose-a:[background-size:100%_2px]
                  prose-blockquote:border-l prose-blockquote:border-border prose-blockquote:text-muted-foreground prose-blockquote:font-display prose-blockquote:italic prose-blockquote:text-[19px] prose-blockquote:[quotes:none]
                  prose-code:text-[13px] prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-[2px] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-secondary prose-pre:text-foreground prose-pre:border prose-pre:border-border prose-pre:rounded-[4px]
                  prose-hr:border-border prose-hr:my-10
                  prose-img:rounded-[4px] prose-img:border prose-img:border-border
                  prose-ol:pl-5 prose-ul:pl-5
                "
              >
                <MDXRemote source={content} />
              </div>

              {/* Tags */}
              {frontmatter.tags && frontmatter.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <p className="text-micro-label text-muted-foreground mb-3">
                    Topics
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {frontmatter.tags.map((tag: string) => (
                      <span key={tag} className="badge-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share */}
              <div className="mt-8">
                <BlogShareBar title={frontmatter.title} />
              </div>
            </div>

            {/* Sticky sidebar */}
            <aside className="hidden lg:block w-[240px] shrink-0">
              <div className="sticky top-[120px]">
                <BlogTableOfContents />
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="px-6 md:px-10 py-16 border-t border-border">
          <div className="mx-auto max-w-[1080px]">
            <h2 className="text-h2 text-foreground mb-10">
              Continue Reading
            </h2>
            <div className="border-b border-border">
              {relatedPosts.map((related: any, index: number) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex items-baseline gap-6 border-t border-border py-6"
                >
                  <span className="font-mono text-sm tracking-[0.04em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 min-w-0 font-display text-[22px] leading-[1.25] tracking-[-0.01em] text-foreground">
                    <span className="link-sweep group-hover:[background-size:100%_2px]">
                      {related.title}
                    </span>
                  </span>
                  <span className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground whitespace-nowrap">
                    {new Date(related.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span
                    aria-hidden
                    className="font-mono text-sm text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-(--accent-brand)"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
