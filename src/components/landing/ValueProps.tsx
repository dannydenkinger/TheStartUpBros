"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Palette,
  Search,
  Smartphone,
  Cog,
  Brain,
  Users,
  Megaphone,
  Lightbulb,
} from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionHeader } from "@/components/shared/SectionHeader";

interface ServiceCell {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

const services: ServiceCell[] = [
  {
    title: "Web Development",
    description:
      "Lightning-fast, responsive websites built with modern frameworks that convert visitors into customers from day one.",
    icon: Globe,
    image: "/images/portfolio/web-development.webp",
  },
  {
    title: "Brand Design",
    description:
      "A cohesive visual identity -- logo, color system, and brand guidelines -- that makes your startup look like a million bucks on launch day.",
    icon: Palette,
    image: "/images/portfolio/brand-design.webp",
  },
  {
    title: "Search Optimization (SEO)",
    description:
      "Technical SEO and content strategy that gets your startup ranking on page one for the keywords your customers are searching.",
    icon: Search,
    image: "/images/portfolio/seo-optimization.webp",
  },
  {
    title: "Custom App Development",
    description:
      "Full-stack web and mobile apps engineered from scratch to turn your product idea into a scalable, shipped reality.",
    icon: Smartphone,
    image: "/images/portfolio/custom-app-development.webp",
  },
  {
    title: "Custom Automation",
    description:
      "Workflow automations that connect your tools, eliminate repetitive tasks, and free your team to focus on growth.",
    icon: Cog,
    image: "/images/portfolio/custom-automation.webp",
  },
  {
    title: "AI Integration",
    description:
      "Custom AI agents, chatbots, and intelligent features baked into your product to give you a serious competitive edge.",
    icon: Brain,
    image: "/images/portfolio/ai-integration.webp",
  },
  {
    title: "Lead Generation",
    description:
      "Automated outbound and inbound systems that find your ideal customers and deliver them straight to your sales pipeline.",
    icon: Users,
    image: "/images/portfolio/sales-crm-full.webp",
  },
  {
    title: "Digital Advertising",
    description:
      "Data-driven ad campaigns across Google, Meta, and LinkedIn that put your startup in front of the right people at the right time.",
    icon: Megaphone,
    image: "/images/portfolio/freelancer-dashboard.webp",
  },
  {
    title: "Strategy & Consulting",
    description:
      "Hands-on guidance to validate your idea, plan your technical roadmap, and avoid the costly mistakes that sink most startups.",
    icon: Lightbulb,
    image: "/images/portfolio/fintech-app-duo.webp",
  },
];

function ServiceCard({
  title,
  description,
  icon: Icon,
  image,
  index,
}: ServiceCell & { index: string }) {
  return (
    <div className="card-elevated h-full flex flex-col group">
      <div className="flex items-center justify-between mb-6">
        <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
        <span className="text-[13px] font-medium tabular-nums text-muted-foreground/70">
          {index}
        </span>
      </div>

      <div className="media-zoom relative aspect-[16/10] rounded-[12px] overflow-hidden bg-secondary mb-6">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <h3 className="text-h3 text-foreground mb-2">{title}</h3>
      <p className="text-[15px] leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

export function ValueProps() {
  return (
    <section className="px-6 md:px-10 py-20 md:py-28">
      <div className="mx-auto max-w-[1360px]">
        <AnimateIn>
          <SectionHeader
            index="01"
            label="SERVICES"
            title={
              <>
                Everything your startup needs{" "}
                <br className="hidden md:block" />
                under one roof
              </>
            }
          />
        </AnimateIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, i) => (
            <AnimateIn
              key={service.title}
              delay={(i % 3) * 0.06}
              className="h-full"
            >
              <ServiceCard
                {...service}
                index={String(i + 1).padStart(2, "0")}
              />
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.12}>
          <div className="mt-12">
            <CTAButton href="/strategy-call" variant="primary">
              Book Strategy Call
            </CTAButton>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
