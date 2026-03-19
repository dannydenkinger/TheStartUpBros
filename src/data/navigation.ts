import type { NavItem } from "@/types";

export const navigationItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Full-Stack App Development", href: "/services/full-stack-apps" },
      { label: "Custom SaaS Frameworks", href: "/services/saas-dev" },
      { label: "AI Agents & Automation", href: "/services/ai-agents" },
      { label: "Premium Web Design", href: "/services/web-design" },
      { label: "Custom Business Tools", href: "/services/tools" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
