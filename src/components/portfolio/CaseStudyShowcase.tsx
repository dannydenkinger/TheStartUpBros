"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// --- Hero Pill Badges Component ---
export function FocusPill({ icon, text, asLink = false, href = "#" }: { icon: React.ReactNode, text: string, asLink?: boolean, href?: string }) {
  const content = (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary backdrop-blur-md shadow-sm transition-all hover:shadow-md hover:bg-muted">
      {icon}
      <span className="text-xs font-medium text-foreground">{text}</span>
    </div>
  );

  if (asLink) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">{content}</a>;
  }
  return content;
}

// --- Icons for Badges ---
export const Icons = {
  ai: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  design: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
       <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
       <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
       <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  ),
  link: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
};

// --- Modular Showcase Blocks ---
export function DoubleVisualBlock({ img1, img2, className }: { img1: string, img2: string, className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 w-full", className)}>
      <div className="relative aspect-square w-full rounded-[24px] overflow-hidden bg-card shadow-sm border border-border">
        <Image src={img1} alt="Case study detail" fill className="object-cover" />
      </div>
      <div className="relative aspect-square w-full rounded-[24px] overflow-hidden bg-card shadow-sm border border-border">
        <Image src={img2} alt="Case study detail" fill className="object-cover" />
      </div>
    </div>
  );
}

export function FeatureBentoBlock({ title, description, image }: { title: string, description: string, image: string }) {
  return (
    <div className="flex flex-col gap-6 w-full mt-24">
      <div className="max-w-[800px]">
        <h3 className="text-[32px] md:text-[40px] font-medium leading-[1.1] tracking-[-0.02em] text-foreground mb-4">
          {title}
        </h3>
        <p className="text-[17px] text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      <div className="relative aspect-[2/1] w-full rounded-[24px] md:rounded-[32px] overflow-hidden bg-card shadow-sm border border-border mt-4">
         <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
}
