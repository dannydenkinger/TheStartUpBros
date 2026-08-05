import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { services } from "@/data/services";
import { projects } from "@/data/portfolio";
import { siteUrl } from "@/lib/metadata";

/* Industry landing pages. The route is an unbounded [slug], so the set that
 * should be indexed is the set we actually link — mirror Header.tsx. */
const INDUSTRY_SLUGS = [
  "ai",
  "marketing",
  "agencies",
  "mobile-apps",
  "web3",
  "sales",
  "fintech",
  "ed-tech",
  "healthcare",
  "b2b",
];

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

  // Case studies — the deepest proof pages on the site, and the ones most
  // likely to rank for "<industry> MVP" style queries.
  const caseStudyRoutes = projects.map((p) => ({
    url: `${siteUrl}/portfolio/${p.slug}`,
    lastModified: new Date(),
    priority: 0.8 as const,
  }));

  // Industry landing pages
  const industryRoutes = INDUSTRY_SLUGS.map((slug) => ({
    url: `${siteUrl}/industries/${slug}`,
    lastModified: new Date(),
    priority: 0.75 as const,
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

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes,
    ...industryRoutes,
    ...blogRoutes,
  ];
}
