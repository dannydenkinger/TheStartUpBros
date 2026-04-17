import type { Metadata } from "next";

const siteUrl = "https://startupbros.dev";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "StartUpBros | AI-Powered MVP Development",
    description:
      "Build Lean. Launch Fast. Scale Smart. Premium MVP development for lean startups.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
