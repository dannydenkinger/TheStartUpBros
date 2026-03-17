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
}

export interface PortfolioProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  deviceType: "macbook" | "iphone" | "both";
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  tags: string[];
}
