export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  slug: string;
  longDescription: string;
  useCases: string[];
  techStack: string[];
  deliverables: string[];

  // Bricx-style template fields (optional)
  featureHighlights?: { icon: string; title: string; description: string }[];
  caseStudySlugs?: [string, string];
  testimonial?: { quote: string; name: string; role: string };
}

export type GalleryBlock =
  | { type: "full"; image: string; alt?: string; caption?: string }
  | {
      type: "twoUp";
      images: { src: string; alt?: string }[];
      caption?: string;
    }
  | {
      type: "imageWithCaption";
      image: string;
      alt?: string;
      heading?: string;
      body: string;
      align?: "left" | "right";
    };

export interface PortfolioProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  deviceType: "macbook" | "iphone" | "both";
  slug: string;
  challenge: string;
  solution: string;
  timeline: string;
  techStack: string[];
  outcomes: string[];

  // Gallery-style template fields (optional — legacy projects fall back to text layout)
  client?: string;
  year?: string;
  industry?: string;
  services?: string[];
  websiteUrl?: string;
  overview?: string;
  gallery?: GalleryBlock[];
  metrics?: { value: string; label: string }[];
  quote?: { text: string; author?: string; role?: string };
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  tags: string[];
}
