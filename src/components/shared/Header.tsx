"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X, Home, FolderOpen, Briefcase, LayoutTemplate, Video } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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
      {/* Theme Toggle — fixed top right */}
      <div className="fixed top-6 right-6 pointer-events-auto z-50">
        <ThemeToggle />
      </div>

      {/* Desktop Floating Navigation */}
      <div className="hidden lg:flex items-center gap-3 w-full max-w-fit mx-auto pointer-events-auto">
        
        {/* Island 1: Logo */}
        <Link 
          href="/" 
          aria-label="Home"
          className="flex items-center justify-center w-[52px] h-[52px] rounded-full shadow-sm hover:scale-105 transition-transform border-4 border-border" style={{ background: 'var(--surface-logo-bg)' }}
        >
          <div className="flex flex-col items-center justify-center gap-[3px]">
            {/* Simple Brick Logo Recreation */}
            <div className="flex gap-[3px]">
              <div className="w-[10px] h-[3px] rounded-[1px]" style={{ background: 'var(--surface-logo-mark)' }} />
              <div className="w-[10px] h-[3px] rounded-[1px]" style={{ background: 'var(--surface-logo-mark)' }} />
            </div>
            <div className="flex gap-[3px]">
              <div className="w-[14px] h-[3px] rounded-[1px]" style={{ background: 'var(--surface-logo-mark)' }} />
              <div className="w-[6px] h-[3px] rounded-[1px]" style={{ background: 'var(--surface-logo-mark)' }} />
            </div>
             <div className="flex gap-[3px]">
              <div className="w-[8px] h-[3px] rounded-[1px]" style={{ background: 'var(--surface-logo-mark)' }} />
              <div className="w-[12px] h-[3px] rounded-[1px]" style={{ background: 'var(--surface-logo-mark)' }} />
            </div>
          </div>
        </Link>

        {/* Island 2: Main Nav Links */}
        <nav className="flex items-center gap-1 p-1.5 rounded-full bg-[--surface-nav-bg] backdrop-blur-xl border border-border shadow-lg shadow-black/10" style={{ background: 'var(--surface-nav-bg)' }}>
           <Link href="/" className="group flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-colors">
             <Home strokeWidth={2.5} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" /> Home
           </Link>

           <Link href="/portfolio" className="group flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-colors">
             <FolderOpen strokeWidth={2.5} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" /> Case Studies
           </Link>

           {/* Industries Dropdown Hover */}
           <div
             className="relative"
             onMouseEnter={() => setIndustriesOpen(true)}
             onMouseLeave={() => setIndustriesOpen(false)}
           >
             <button className="group flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-colors">
               <Briefcase strokeWidth={2.5} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" /> Industries
             </button>

             {industriesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[300px] p-2 rounded-2xl shadow-xl grid grid-cols-2 gap-1 pointer-events-auto border border-border" style={{ background: 'var(--surface-dropdown-bg)' }}>
                  {industries.map(item => (
                    <Link key={item.name} href={item.href} className="px-4 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </div>
             )}
           </div>

           <Link href="/blog" className="group flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-colors">
             <LayoutTemplate strokeWidth={2.5} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" /> Blog
           </Link>
        </nav>

        {/* Island 3: CTAs */}
        <div className="flex items-center gap-2">
          {/* Main CTA */}
          <Link
            href="/strategy-call"
            className="flex items-center gap-2.5 h-[52px] px-6 rounded-full bg-primary text-primary-foreground text-[15px] font-medium shadow-lg shadow-black/10 hover:opacity-90 transition-all"
          >
             <div className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-primary-foreground/20">
                <Video className="w-3 h-3 text-[#4285F4]" />
             </div>
             Book a Call
          </Link>

        </div>
      </div>

      {/* Mobile Floating Navigation Variant */}
      <div className="flex lg:hidden items-center justify-between w-full pointer-events-auto backdrop-blur-xl px-4 py-3 rounded-2xl border border-border shadow-xl mt-4 max-w-[90vw] mx-auto" style={{ background: 'var(--surface-nav-bg)' }}>
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-border" style={{ background: 'var(--surface-logo-bg)' }}>
            <div className="flex flex-col gap-[2px]">
              <div className="flex gap-[2px]">
                <div className="w-[6px] h-[2px] rounded-sm" style={{ background: 'var(--surface-logo-mark)' }} />
                <div className="w-[6px] h-[2px] rounded-sm" style={{ background: 'var(--surface-logo-mark)' }} />
              </div>
              <div className="flex gap-[2px]">
                <div className="w-[8px] h-[2px] rounded-sm" style={{ background: 'var(--surface-logo-mark)' }} />
                <div className="w-[4px] h-[2px] rounded-sm" style={{ background: 'var(--surface-logo-mark)' }} />
              </div>
            </div>
          </div>
          <span className="font-semibold text-foreground tracking-tight">Startup Bros</span>
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
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border shadow-2xl">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                 <span className="font-semibold text-lg tracking-tight text-foreground">Startup Bros</span>
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
