import { FinalCTA } from "@/components/landing/FinalCTA";
// The components below are exported from CaseStudyShowcase.tsx, we import them directly.
import { FocusPill, Icons, DoubleVisualBlock, FeatureBentoBlock } from "@/components/portfolio/CaseStudyShowcase";
import Image from "next/image";

// Placeholder data simulation for the dynamic route
const getCaseStudyData = (slug: string) => {
  return {
    title: `Finding PMF for ${slug.toUpperCase()} with a Designer First Landing Page`,
    description: "We designed a focused landing page to test real designer demand, refine the positioning and gather high intent signals.",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=80",
    about: `${slug.toUpperCase()} is an AI-powered plugin built for UX designers who want to iterate faster without disrupting their existing workflows. Positioned as the Cursor for Designers, it focuses on fast iteration, system-aware design, and real-world usability for modern SaaS product teams.`,
    outcomes: "The landing page successfully validated positioning and demand, driving 3,000+ waitlist signups from designers across leading product teams including Google, Meta, Amazon, Apple, Microsoft, Slack, Spotify, Cisco, Vodafone, ClickUp, Intuit, and more. The quality of signups provided strong early PMF signals.",
    visuals: {
      split1: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&q=80",
      split2: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80",
      featureImg: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1600&q=80"
    }
  };
};

import React from "react";

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const data = getCaseStudyData(resolvedParams.slug);

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9f9]">
      
      {/* 1. Hero Header */}
      <section className="px-6 md:px-0 pt-[160px] pb-[60px] w-[90vw] max-w-none mx-auto">
        {/* Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <FocusPill icon={Icons.ai} text="AI" />
          <FocusPill icon={Icons.design} text="Website Design" />
          <FocusPill icon={Icons.link} text="Visit Website" asLink href="#" />
        </div>
        
        {/* Title & Subtitle */}
        <div className="max-w-[1000px]">
          <h1 className="text-[48px] md:text-[64px] font-medium leading-[1.05] tracking-[-0.03em] text-[#262626] mb-6">
            {data.title}
          </h1>
          <p className="text-[17px] md:text-[20px] text-muted-foreground leading-relaxed max-w-[800px]">
            {data.description}
          </p>
        </div>
      </section>

      {/* 2. Massive Hero Visual */}
      <section className="px-6 md:px-0 w-[90vw] max-w-none mx-auto mb-20 md:mb-32">
        <div className="relative aspect-[16/9] md:aspect-[2.4/1] w-full rounded-[24px] md:rounded-[32px] overflow-hidden bg-[#e5e5e5] shadow-sm border border-black/5">
          <Image 
            src={data.heroImage}
            alt={`${resolvedParams.slug} hero`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* 3. Context & Outcomes Meta Grid */}
      <section className="px-6 md:px-0 w-[90vw] max-w-[1400px] mx-auto mb-32">
        <div className="flex flex-col border-t border-[#e3e3e3]">
          
          {/* About Row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-20 py-10 md:py-16 border-b border-[#e3e3e3]">
            <div className="w-full md:w-1/4">
              <h4 className="text-[18px] font-bold text-[#262626]">About {resolvedParams.slug}</h4>
            </div>
            <div className="w-full md:w-3/4 max-w-[900px]">
              <p className="text-[16px] md:text-[18px] text-muted-foreground leading-relaxed">
                {data.about}
              </p>
            </div>
          </div>

          {/* Outcomes Row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-20 py-10 md:py-16 border-b border-[#e3e3e3]">
            <div className="w-full md:w-1/4">
              <h4 className="text-[18px] font-bold text-[#262626]">Outcomes</h4>
            </div>
            <div className="w-full md:w-3/4 max-w-[900px]">
              <p className="text-[16px] md:text-[18px] text-muted-foreground leading-relaxed">
                {data.outcomes}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Modular Visual Showcase */}
      <section className="px-6 md:px-0 w-[90vw] max-w-none mx-auto pb-32">
         {/* Split Visuals */}
         <DoubleVisualBlock img1={data.visuals.split1} img2={data.visuals.split2} />
         
         {/* Feature Bento */}
         <FeatureBentoBlock 
           title="Designed for Designers Who Move Fast" 
           description="Fray integrates directly with your workflow to eliminate blockers, speed up iteration, and support better creative decisions—without ever slowing you down. Built Right Inside Figma for massive workflow leverage."
           image={data.visuals.featureImg}
         />
      </section>
      
      {/* 5. Final CTA */}
      <FinalCTA />
    </div>
  );
}
