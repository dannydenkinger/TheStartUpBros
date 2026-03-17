import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

const contentDir = path.join(process.cwd(), "src/content/blog");

function getPost(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
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
    title: post.frontmatter.title,
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

  return (
    <article className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <header className="mb-12">
          <p className="text-caption text-muted-foreground mb-4">
            {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="text-h1 text-foreground">
            {post.frontmatter.title}
          </h1>
          <p className="text-body-lg text-muted-foreground mt-4">
            {post.frontmatter.description}
          </p>
        </header>

        <div className="prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-accent prose-strong:text-foreground">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  );
}
