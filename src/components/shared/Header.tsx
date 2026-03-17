"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X, Home, FolderOpen, Briefcase, LayoutTemplate, Video } from "lucide-react";

const industries = [
  { name: "AI", href: "/industries/ai" },
  { name: "Marketing", href: "/industries/marketing" },
  { name: "B2B", href: "/industries/agencies" },
  { name: "Mobile Apps", href: "/industries/mobile-apps" },
  { name: "Web3", href: "/industries/web3" },
  { name: "Sales", href: "/industries/sales" },
  { name: "Fintech", href: "/industries/fintech" },
  { name: "Ed-Tech", href: "/industries/ed-tech" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Supply Chain", href: "/industries/b2b" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
      {/* Desktop Floating Navigation */}
      <div className="hidden lg:flex items-center gap-3 w-full max-w-fit mx-auto pointer-events-auto">
        
        {/* Island 1: Logo */}
        <Link 
          href="/" 
          aria-label="Home"
          className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-[#1b1b1e] border-4 border-white shadow-sm hover:scale-105 transition-transform"
        >
          <div className="flex flex-col items-center justify-center gap-[3px]">
            {/* Simple Brick Logo Recreation */}
            <div className="flex gap-[3px]">
              <div className="w-[10px] h-[3px] bg-white rounded-[1px]" />
              <div className="w-[10px] h-[3px] bg-white rounded-[1px]" />
            </div>
            <div className="flex gap-[3px]">
              <div className="w-[14px] h-[3px] bg-white rounded-[1px]" />
              <div className="w-[6px] h-[3px] bg-white rounded-[1px]" />
            </div>
             <div className="flex gap-[3px]">
              <div className="w-[8px] h-[3px] bg-white rounded-[1px]" />
              <div className="w-[12px] h-[3px] bg-white rounded-[1px]" />
            </div>
          </div>
        </Link>

        {/* Island 2: Main Nav Links */}
        <nav className="flex items-center gap-1 p-1.5 rounded-full bg-white border border-[#e8e8e8] shadow-lg shadow-black/[0.03]">
           <Link href="/" className="group flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium text-[#4a4a4a] hover:text-[#1b1b1e] hover:bg-[#f5f5f5] rounded-full transition-colors">
             <Home strokeWidth={2.5} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" /> Home
           </Link>
           
           <Link href="/portfolio" className="group flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium text-[#4a4a4a] hover:text-[#1b1b1e] hover:bg-[#f5f5f5] rounded-full transition-colors">
             <FolderOpen strokeWidth={2.5} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" /> Case Studies
           </Link>
           
           {/* Industries Dropdown Hover */}
           <div 
             className="relative"
             onMouseEnter={() => setIndustriesOpen(true)}
             onMouseLeave={() => setIndustriesOpen(false)}
           >
             <button className="group flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium text-[#4a4a4a] hover:text-[#1b1b1e] hover:bg-[#f5f5f5] rounded-full transition-colors">
               <Briefcase strokeWidth={2.5} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" /> Industries
             </button>
             
             {industriesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[300px] p-2 bg-white border border-[#e3e3e3] rounded-2xl shadow-xl grid grid-cols-2 gap-1 pointer-events-auto">
                  {industries.map(item => (
                    <Link key={item.name} href={item.href} className="px-4 py-2 text-[13px] font-medium text-[#4a4a4a] hover:text-[#1b1b1e] hover:bg-[#f5f5f5] rounded-xl transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </div>
             )}
           </div>

           <Link href="/blog" className="group flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium text-[#4a4a4a] hover:text-[#1b1b1e] hover:bg-[#f5f5f5] rounded-full transition-colors">
             <LayoutTemplate strokeWidth={2.5} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" /> Blog
           </Link>
        </nav>

        {/* Island 3: CTAs */}
        <div className="flex items-center gap-2">
          {/* Main CTA */}
          <Link 
            href="/strategy-call" 
            className="flex items-center gap-2.5 h-[52px] px-6 rounded-full bg-[#1e1e20] text-white text-[15px] font-medium shadow-lg shadow-black/10 hover:bg-black transition-colors"
          >
             <div className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#2a2a2d]">
                <Video className="w-3 h-3 text-[#4285F4]" />
             </div>
             Book a Call
          </Link>

          {/* WhatsApp CTA */}
          <a 
            href="https://api.whatsapp.com/send?phone=918178563140" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Contact on WhatsApp"
            className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-[#1e1e20] hover:bg-black transition-colors shadow-lg shadow-black/10"
          >
            <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#25D366]">
              {/* WhatsApp Icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.473-1.761-1.645-2.061-.173-.298-.018-.461.13-.611.134-.135.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.015-1.04 2.474c0 1.459 1.064 2.868 1.213 3.067.149.198 2.095 3.198 5.076 4.485.709.307 1.262.49 1.694.627.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* Mobile Floating Navigation Variant */}
      <div className="flex lg:hidden items-center justify-between w-full pointer-events-auto bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-border/40 shadow-xl mt-4 max-w-[90vw] mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#1b1b1e] rounded-full flex items-center justify-center border-2 border-white">
            <div className="flex flex-col gap-[2px]">
              <div className="flex gap-[2px]">
                <div className="w-[6px] h-[2px] bg-white rounded-sm" />
                <div className="w-[6px] h-[2px] bg-white rounded-sm" />
              </div>
              <div className="flex gap-[2px]">
                <div className="w-[8px] h-[2px] bg-white rounded-sm" />
                <div className="w-[4px] h-[2px] bg-white rounded-sm" />
              </div>
            </div>
          </div>
          <span className="font-semibold text-foreground tracking-tight">BRICX</span>
        </Link>
        <button
          type="button"
          className="p-2 text-foreground"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Full Screen Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border shadow-2xl">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                 <span className="font-semibold text-lg tracking-tight text-foreground">BRICX</span>
              </Link>
              <button
                type="button"
                className="rounded-md p-2.5 text-foreground bg-secondary/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-border/50">
                <div className="space-y-4 py-6">
                  <Link href="/" className="flex items-center gap-4 py-3 px-2 text-[17px] font-medium text-foreground hover:bg-secondary rounded-xl" onClick={() => setMobileMenuOpen(false)}>
                    <Home strokeWidth={2} className="w-5 h-5 text-muted-foreground" /> Home
                  </Link>
                  <Link href="/portfolio" className="flex items-center gap-4 py-3 px-2 text-[17px] font-medium text-foreground hover:bg-secondary rounded-xl" onClick={() => setMobileMenuOpen(false)}>
                    <FolderOpen strokeWidth={2} className="w-5 h-5 text-muted-foreground" /> Case Studies
                  </Link>
                  <div className="flex flex-col gap-2">
                    <button onClick={() => setIndustriesOpen(!industriesOpen)} className="flex items-center justify-between w-full py-3 px-2 text-[17px] font-medium text-foreground hover:bg-secondary rounded-xl">
                      <div className="flex items-center gap-4">
                        <Briefcase strokeWidth={2} className="w-5 h-5 text-muted-foreground" /> Industries
                      </div>
                      <ChevronDown className={cn("w-5 h-5 transition-transform", industriesOpen && "rotate-180")} />
                    </button>
                    {industriesOpen && (
                      <div className="pl-12 flex flex-col gap-3 pb-2">
                        {industries.map(item => (
                          <Link key={item.name} href={item.href} className="text-[15px] font-medium text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link href="/blog" className="flex items-center gap-4 py-3 px-2 text-[17px] font-medium text-foreground hover:bg-secondary rounded-xl" onClick={() => setMobileMenuOpen(false)}>
                    <LayoutTemplate strokeWidth={2} className="w-5 h-5 text-muted-foreground" /> Blog
                  </Link>
                </div>
                <div className="py-6 flex flex-col gap-4">
                  <Link href="/strategy-call" className="flex justify-center w-full btn-pill btn-pill-primary" onClick={() => setMobileMenuOpen(false)}>
                    Book a Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
