"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const cases = [
  {
    title: "Building an Enterprise-Grade Website for LTV.ai",
    tags: ["AI", "Location"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  },
  {
    title: "Designing Gigamiind's Credible AI-First Landing Page",
    tags: ["AI", "San Francisco, CA"],
    image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&q=80",
  },
  {
    title: "Redesigning GigaMind's Entire Product in Two Weeks",
    tags: ["AI", "San Francisco, CA"],
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80",
  },
  {
    title: "Redesigning Sybill Without Disrupting Existing Users",
    tags: ["AI", "Mountain View, CA"],
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80",
  },
  {
    title: "Designing Hobbes's as an Embedded Partner",
    tags: ["AI", "San Francisco, CA"],
    image: "https://images.unsplash.com/photo-1628126235206-5260b9ea6441?w=800&q=80",
  },
  {
    title: "Rebranding Hobbes for an AI-First Market",
    tags: ["AI", "San Francisco, CA"],
    image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&q=80",
  },
  {
    title: "Turning AlSuitUp's Landing Page Into a Conversion Engine",
    tags: ["AI", "Albuquerque, New Mexico"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  },
  {
    title: "Powering N3on's First Token Launch with a 10 Day Platform Redesign",
    tags: ["AI", "Canada"],
    image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&q=80",
  },
  {
    title: "Designing Socialsonic's MVP To Reach 1000+ Users In 30 Days",
    tags: ["Marketing", "San Francisco, CA"],
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80",
  },
  {
    title: "Manyreach Website Revamp that Increased Conversions & AOV",
    tags: ["Sales", "Canada"],
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80",
  }
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
            className="w-full sm:w-[300px] px-4 py-2 rounded-lg border border-[#e3e3e3] bg-transparent text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
          />
          <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="w-full sm:w-auto flex items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">Category</span>
          <select className="px-4 py-2 rounded-lg border border-[#e3e3e3] bg-transparent text-sm text-foreground focus:outline-none hover:bg-black/5 cursor-pointer appearance-none pr-8 relative">
            <option value="most-relevant">Most Relevant</option>
            <option value="ai">AI</option>
            <option value="fintech">Fintech</option>
            <option value="marketing">Marketing</option>
            <option value="b2b">B2B SaaS</option>
          </select>
          {/* Custom chevron needed since appearance is none */}
          <div className="absolute right-4 pointer-events-none sm:relative sm:right-auto sm:-ml-8">
            <svg className="w-4 h-4 text-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Grid Layout (exactly mapping Bricx spacing & behavior) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-[80px]">
        {cases.map((project, i) => (
          <a key={i} href="#" className="group flex flex-col gap-4">
            {/* Image Container with precise styling */}
            <div className="relative aspect-[1.3/1] w-full overflow-hidden rounded-[20px] border border-[#e3e3e3]/50 shadow-sm bg-[#f5f5f5]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
              />
            </div>
            
            {/* Content Details */}
            <div className="flex flex-col items-start gap-2 pt-2 px-1">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary" 
                    className="font-medium text-xs bg-black/5 hover:bg-black/10 text-foreground/70"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h4 className="text-[24px] md:text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-[#262626] mt-1 group-hover:text-black/70 transition-colors">
                {project.title}
              </h4>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
