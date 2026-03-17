import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
      <header className="px-6 lg:px-10 pt-12 pb-8">
        <div className="mx-auto max-w-[1080px]">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200" />
            Blog
          </Link>

          {/* Category badge */}
          {frontmatter.category && (
            <Badge
              variant="secondary"
              className="text-[11px] rounded-full px-3 py-1 mb-4 font-medium"
            >
              {frontmatter.category}
            </Badge>
          )}

          {/* Title */}
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground max-w-[800px] mb-6">
            {frontmatter.title}
          </h1>

          {/* Author row */}
          <div className="flex flex-wrap items-center gap-4 text-[13px] text-muted-foreground">
            {/* Author avatar */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center text-[14px] font-semibold text-neutral-600">
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
                  <p className="text-[12px] text-muted-foreground">
                    {frontmatter.authorRole}
                  </p>
                )}
              </div>
            </div>

            <span className="w-px h-4 bg-border" />

            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {formattedDate}
            </div>

            {frontmatter.readTime && (
              <>
                <span className="w-px h-4 bg-border" />
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {frontmatter.readTime}
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Description / intro */}
      {frontmatter.description && (
        <div className="px-6 lg:px-10 pb-8">
          <div className="mx-auto max-w-[1080px]">
            <p className="text-[17px] leading-relaxed text-muted-foreground max-w-[680px]">
              {frontmatter.description}
            </p>
          </div>
        </div>
      )}

      {/* Hero image */}
      {frontmatter.image && (
        <div className="px-6 lg:px-10 pb-12">
          <div className="mx-auto max-w-[1080px]">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src={frontmatter.image}
                alt={frontmatter.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Two-column content */}
      <div className="px-6 lg:px-10 pb-20">
        <div className="mx-auto max-w-[1080px]">
          <div className="flex gap-16">
            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-[680px]" data-blog-content>
              <div
                className="
                  prose prose-neutral max-w-none
                  prose-headings:font-semibold prose-headings:tracking-[-0.02em]
                  prose-h2:text-[24px] prose-h2:mt-12 prose-h2:mb-4
                  prose-h3:text-[18px] prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-[15px] prose-p:leading-[1.8] prose-p:text-neutral-600
                  prose-li:text-[15px] prose-li:leading-[1.8] prose-li:text-neutral-600
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-a:text-foreground prose-a:underline prose-a:underline-offset-2 prose-a:decoration-border hover:prose-a:decoration-foreground
                  prose-blockquote:border-l-foreground/20 prose-blockquote:text-muted-foreground prose-blockquote:not-italic
                  prose-code:text-[13px] prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
                  prose-hr:border-border prose-hr:my-10
                  prose-img:rounded-xl prose-img:border prose-img:border-border
                  prose-ol:pl-5 prose-ul:pl-5
                "
              >
                <MDXRemote source={content} />
              </div>

              {/* Tags */}
              {frontmatter.tags && frontmatter.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground mb-3">
                    Topics
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {frontmatter.tags.map((tag: string) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[12px] rounded-full px-3 py-1"
                      >
                        {tag}
                      </Badge>
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
        <section className="px-6 lg:px-10 py-16 border-t border-border bg-muted/30">
          <div className="mx-auto max-w-[1080px]">
            <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-foreground mb-8">
              Continue Reading
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedPosts.map((related: any) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block"
                >
                  <div className="card-elevated p-6">
                    <p className="text-[12px] text-muted-foreground mb-2">
                      {new Date(related.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <h3 className="text-[15px] font-semibold text-foreground group-hover:text-muted-foreground transition-colors duration-200 mb-2 line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground line-clamp-2">
                      {related.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
