import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { services } from "@/data/services";

const siteUrl = "https://startupbros.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: siteUrl, lastModified: new Date(), priority: 1 },
    { url: `${siteUrl}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteUrl}/portfolio`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteUrl}/strategy-call`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteUrl}/gallery`, lastModified: new Date(), priority: 0.7 },
    { url: `${siteUrl}/tools/saas-cost`, lastModified: new Date(), priority: 0.7 },
  ];

  // Service pages
  const serviceRoutes = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: new Date(),
    priority: 0.85 as const,
  }));

  // Blog posts
  const contentDir = path.join(process.cwd(), "src/content/blog");
  let blogRoutes: MetadataRoute.Sitemap = [];

  if (fs.existsSync(contentDir)) {
    const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
    blogRoutes = files.map((f) => ({
      url: `${siteUrl}/blog/${f.replace(".mdx", "")}`,
      lastModified: new Date(),
      priority: 0.7,
    }));
  }

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
