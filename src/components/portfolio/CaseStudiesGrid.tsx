"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const cases = [
  {
    slug: "ltv-ai",
    title: "Building an Enterprise-Grade Website for LTV.ai",
    tags: ["AI", "Location"],
    image: "/images/portfolio/crm-dashboard.webp",
  },
  {
    slug: "gigamind-landing",
    title: "Designing Gigamiind's Credible AI-First Landing Page",
    tags: ["AI", "San Francisco, CA"],
    image: "/images/portfolio/ai-landing.webp",
  },
  {
    slug: "gigamind-product",
    title: "Redesigning GigaMind's Entire Product in Two Weeks",
    tags: ["AI", "San Francisco, CA"],
    image: "/images/portfolio/productivity-dashboard.webp",
  },
  {
    slug: "sybill",
    title: "Redesigning Sybill Without Disrupting Existing Users",
    tags: ["AI", "Mountain View, CA"],
    image: "/images/portfolio/sales-crm-full.webp",
  },
  {
    slug: "hobbes-embedded",
    title: "Designing Hobbes's as an Embedded Partner",
    tags: ["AI", "San Francisco, CA"],
    image: "/images/portfolio/crm-journeys.webp",
  },
  {
    slug: "hobbes-rebrand",
    title: "Rebranding Hobbes for an AI-First Market",
    tags: ["AI", "San Francisco, CA"],
    image: "/images/portfolio/crm-detail.webp",
  },
  {
    slug: "alsuitup",
    title: "Turning AlSuitUp's Landing Page Into a Conversion Engine",
    tags: ["AI", "Albuquerque, New Mexico"],
    image: "/images/portfolio/fintech-mobile.webp",
  },
  {
    slug: "n3on",
    title: "Powering N3on's First Token Launch with a 10 Day Platform Redesign",
    tags: ["AI", "Canada"],
    image: "/images/portfolio/defi-landing.webp",
  },
  {
    slug: "socialsonic",
    title: "Designing Socialsonic's MVP To Reach 1000+ Users In 30 Days",
    tags: ["Marketing", "San Francisco, CA"],
    image: "/images/portfolio/freelancer-dashboard.webp",
  },
  {
    slug: "manyreach",
    title: "Manyreach Website Revamp that Increased Conversions & AOV",
    tags: ["Sales", "Canada"],
    image: "/images/portfolio/sales-crm-detail.webp",
  },
];

export function CaseStudiesGrid() {
  return (
    <section className="px-6 md:px-0 pb-20 md:pb-28 w-[90vw] max-w-none mx-auto">
      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
        <div className="w-full sm:w-auto relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full sm:w-[300px] px-4 py-2 rounded-lg border border-border bg-transparent text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
          />
          <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="w-full sm:w-auto flex items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">Category</span>
          <select className="px-4 py-2 rounded-lg border border-border bg-transparent text-sm text-foreground focus:outline-none hover:bg-secondary cursor-pointer appearance-none pr-8 relative">
            <option value="most-relevant">Most Relevant</option>
            <option value="ai">AI</option>
            <option value="fintech">Fintech</option>
            <option value="marketing">Marketing</option>
            <option value="b2b">B2B SaaS</option>
          </select>
          <div className="absolute right-4 pointer-events-none sm:relative sm:right-auto sm:-ml-8">
            <svg className="w-4 h-4 text-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-[80px]">
        {cases.map((project) => (
          <Link key={project.slug} href={`/portfolio/${project.slug}`} className="group flex flex-col gap-4">
            <div className="relative aspect-[1.3/1] w-full overflow-hidden rounded-[20px] border border-border/50 shadow-sm bg-card">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-start gap-2 pt-2 px-1">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="font-medium text-xs bg-secondary hover:bg-muted text-foreground/70"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h4 className="text-[24px] md:text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-foreground mt-1 group-hover:text-foreground/70 transition-colors">
                {project.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
