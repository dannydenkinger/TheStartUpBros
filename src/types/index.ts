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
}

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
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  tags: string[];
}
