import type { Metadata } from "next";

const siteUrl = "https://startupbros.dev";

/* Social share card — 1200x630 declared, shipped at 2x for retina unfurls.
 * Exported because Next REPLACES (never merges) a parent openGraph block, so
 * every route declaring its own openGraph must re-supply the image. */
export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "StartUpBros — Launch-Ready Products, Built In Weeks",
};

export const siteMetadata: Metadata = {
  title: {
    default: "StartUpBros | AI-Powered MVP Development",
    template: "%s | StartUpBros",
  },
  description:
    "The one-stop shop for AI-powered MVPs. We deliver 90% solutions so you can go to market tomorrow. Full-stack apps, SaaS frameworks, AI agents, and more.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "StartUpBros",
    title: "StartUpBros | AI-Powered MVP Development",
    description:
      "Build Lean. Launch Fast. Scale Smart. Premium MVP development for lean startups.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "StartUpBros | AI-Powered MVP Development",
    description:
      "Build Lean. Launch Fast. Scale Smart. Premium MVP development for lean startups.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};
