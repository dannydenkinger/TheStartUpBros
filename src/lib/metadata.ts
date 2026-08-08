import type { Metadata } from "next";

/* Canonical origin — the single source of truth for every absolute URL
 * (metadata, OG/twitter cards, JSON-LD, sitemap). Nothing else hardcodes the
 * host except the Sitemap line in public/robots.txt, which can't import.
 *
 * The www is deliberate: the apex 308-redirects to www, so www is where every
 * request actually lands. A canonical pointing at a URL that redirects makes
 * Google resolve a hop to find the real page — point it at the destination. */
export const siteUrl = "https://www.startupbros.io";

/* Social share card — 1200x630 declared, shipped at 2x for retina unfurls.
 * Exported because Next REPLACES (never merges) a parent openGraph block, so
 * every route declaring its own openGraph must re-supply the image. */
export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "StartUpBros — Launch-Ready Products, Built In Weeks",
};

const TITLE = "MVP Development Agency | App Development & Web Design — StartUpBros";
const DESCRIPTION =
  "We build your MVP in 2–4 weeks, hand you the code, and stay on retainer for updates and maintenance. Full-stack app development, website design, AI integration, and SEO for startups.";

export const siteMetadata: Metadata = {
  title: {
    default: TITLE,
    template: "%s | StartUpBros",
  },
  description: DESCRIPTION,
  metadataBase: new URL(siteUrl),
  applicationName: "StartUpBros",
  authors: [{ name: "StartUpBros" }],
  creator: "StartUpBros",
  publisher: "StartUpBros",
  category: "Software Development",
  keywords: [
    "MVP development",
    "MVP development agency",
    "build an MVP",
    "app development",
    "custom app development",
    "web app development",
    "website design",
    "web design agency",
    "search engine optimization",
    "SEO services",
    "startup app developer",
    "SaaS development",
    "AI integration",
    "AI agents",
    "product design",
    "software maintenance retainer",
    "minimum viable product",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "StartUpBros",
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
