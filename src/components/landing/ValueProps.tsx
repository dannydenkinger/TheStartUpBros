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
      "Fast, modern, and reliable websites built to be the high-performance home for your business.",
    icons: [Globe, Code, Monitor],
    image: "/images/portfolio/ai-landing.webp",
  },
  {
    title: "Custom App Development",
    description:
      "We build the custom software or mobile apps you need to bring your unique product idea to life.",
    icons: [Smartphone, Layers, Terminal],
    image: "/images/portfolio/travel-app.webp",
  },
  {
    title: "Search Optimization (SEO)",
    description:
      "Getting your business found on the first page of Google by the people actively looking for your services.",
    icons: [Search, TrendingUp, BarChart3],
    image: "/images/portfolio/fintech-dashboard.webp",
  },
  {
    title: "Brand Design",
    description:
      "A unique and professional look that makes your startup stand out from every competitor in the market.",
    icons: [Palette, Paintbrush, Sparkles],
    image: "/images/portfolio/defi-landing.webp",
  },
  {
    title: "Custom Automation",
    description:
      "Connecting your apps to handle the busy work so you can focus on the big-picture growth.",
    icons: [Cog, Workflow, Zap],
    image: "/images/portfolio/productivity-dashboard.webp",
  },
  {
    title: "AI Integration",
    description:
      "Smart tools and AI solutions that give your business a modern, high-tech competitive edge.",
    icons: [Brain, Bot, Cpu],
    image: "/images/portfolio/crm-dashboard.webp",
  },
  {
    title: "Lead Generation",
    description:
      "Building a system that finds your ideal customers and brings them directly to your door.",
    icons: [Users, Target, Magnet],
    image: "/images/portfolio/sales-crm-full.webp",
  },
  {
    title: "Digital Advertising",
    description:
      "High-impact ads designed to put your brand in front of the right people at the exact right time.",
    icons: [Megaphone, MousePointerClick, LineChart],
    image: "/images/portfolio/freelancer-dashboard.webp",
  },
  {
    title: "Strategy & Consulting",
    description:
      "Expert guidance to help you plan your roadmap, pick the right tech, and avoid costly mistakes.",
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
