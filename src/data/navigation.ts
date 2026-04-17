import type { NavItem } from "@/types";

export const navigationItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Custom App Development", href: "/services/custom-app-dev" },
      { label: "SEO", href: "/services/seo" },
      { label: "Brand Design", href: "/services/brand-design" },
      { label: "Custom Automation", href: "/services/custom-automation" },
      { label: "AI Integration", href: "/services/ai-integration" },
      { label: "Lead Generation", href: "/services/lead-generation" },
      { label: "Digital Advertising", href: "/services/digital-advertising" },
      { label: "Strategy & Consulting", href: "/services/strategy-consulting" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/strategy-call" },
];
