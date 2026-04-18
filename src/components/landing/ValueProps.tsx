"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Code,
  Monitor,
  Smartphone,
  Layers,
  Terminal,
  Search,
  TrendingUp,
  BarChart3,
  Palette,
  Paintbrush,
  Sparkles,
  Cog,
  Workflow,
  Zap,
  Brain,
  Bot,
  Cpu,
  Users,
  Target,
  Magnet,
  Megaphone,
  MousePointerClick,
  LineChart,
  Lightbulb,
  Compass,
  Presentation,
} from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { CTAButton } from "@/components/shared/CTAButton";

interface FolderService {
  title: string;
  description: string;
  icons: LucideIcon[];
  image: string;
}

const services: FolderService[] = [
  {
    title: "Web Development",
    description:
      "Lightning-fast, responsive websites built with modern frameworks that convert visitors into customers from day one.",
    icons: [Globe, Code, Monitor],
    image: "/images/portfolio/web-development.webp",
  },
  {
    title: "Custom App Development",
    description:
      "Full-stack web and mobile apps engineered from scratch to turn your product idea into a scalable, shipped reality.",
    icons: [Smartphone, Layers, Terminal],
    image: "/images/portfolio/custom-app-development.webp",
  },
  {
    title: "Search Optimization (SEO)",
    description:
      "Technical SEO and content strategy that gets your startup ranking on page one for the keywords your customers are searching.",
    icons: [Search, TrendingUp, BarChart3],
    image: "/images/portfolio/seo-optimization.webp",
  },
  {
    title: "Brand Design",
    description:
      "A cohesive visual identity -- logo, color system, and brand guidelines -- that makes your startup look like a million bucks on launch day.",
    icons: [Palette, Paintbrush, Sparkles],
    image: "/images/portfolio/brand-design.webp",
  },
  {
    title: "Custom Automation",
    description:
      "Workflow automations that connect your tools, eliminate repetitive tasks, and free your team to focus on growth.",
    icons: [Cog, Workflow, Zap],
    image: "/images/portfolio/custom-automation.webp",
  },
  {
    title: "AI Integration",
    description:
      "Custom AI agents, chatbots, and intelligent features baked into your product to give you a serious competitive edge.",
    icons: [Brain, Bot, Cpu],
    image: "/images/portfolio/ai-integration.webp",
  },
  {
    title: "Lead Generation",
    description:
      "Automated outbound and inbound systems that find your ideal customers and deliver them straight to your pipeline.",
    icons: [Users, Target, Magnet],
    image: "/images/portfolio/sales-crm-full.webp",
  },
  {
    title: "Digital Advertising",
    description:
      "Data-driven ad campaigns across Google, Meta, and LinkedIn that put your startup in front of the right people at the right time.",
    icons: [Megaphone, MousePointerClick, LineChart],
    image: "/images/portfolio/freelancer-dashboard.webp",
  },
  {
    title: "Strategy & Consulting",
    description:
      "Hands-on guidance to validate your idea, plan your technical roadmap, and avoid the costly mistakes that sink most startups.",
    icons: [Lightbulb, Compass, Presentation],
    image: "/images/portfolio/fintech-app-duo.webp",
  },
];

function ServiceCard({ title, description, icons, image }: FolderService) {
  return (
    <div className="folder-card-stack group">
      {/* Main card body */}
      <div className="folder-card-body">
        {/* Image — overflows above the card */}
        <div
          className="relative mx-3 rounded-2xl overflow-hidden shadow-lg"
          style={{ marginTop: "-48px", height: "200px" }}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-[1.04] transition-transform duration-600"
          />
        </div>

        {/* Icon badges */}
        <div className="flex gap-2.5 px-5 pt-5">
          {icons.map((Icon, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center"
            >
              <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="px-5 pt-4 pb-6">
          <h3 className="text-[18px] font-semibold text-foreground mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-[13px] leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ValueProps() {
  return (
    <section className="px-6 lg:px-10 py-20 md:py-28">
      <div className="mx-auto max-w-[1220px]">
        <AnimateIn>
          <div className="text-center mb-14">
            <span className="badge-pill mb-6 inline-block">Our Services</span>
            <h2 className="text-h2 text-foreground">
              Everything your startup needs
              <br className="hidden md:block" />
              under one roof
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={i * 0.06}>
              <ServiceCard {...service} />
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.6}>
          <div className="mt-14 text-center">
            <CTAButton href="/strategy-call" variant="primary">
              Book Strategy Call
            </CTAButton>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
