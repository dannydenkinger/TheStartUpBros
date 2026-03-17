"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, LayoutGrid } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav className="flex items-center gap-1 rounded-full border border-[#e5e5e5] bg-white/90 backdrop-blur-md shadow-[0_2px_16px_rgba(0,0,0,0.06)] px-2 py-1.5">
        {/* Logo icon */}
        <Link
          href="/"
          className="flex items-center justify-center h-9 w-9 rounded-full bg-[#f5f5f5] text-foreground hover:bg-[#eee] transition-colors"
        >
          <LayoutGrid className="h-4 w-4" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-0.5 ml-1">
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-medium text-foreground hover:bg-[#f5f5f5] transition-colors"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            Home
          </Link>

          {navigationItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-[#f5f5f5] transition-colors"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current opacity-40" />
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-3 w-3 transition-transform duration-200",
                      servicesOpen && "rotate-180"
                    )}
                  />
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl bg-white border border-[#e5e5e5] shadow-[0_4px_24px_rgba(0,0,0,0.1)] p-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-3 py-2.5 text-[13px] text-muted-foreground hover:text-foreground hover:bg-[#f5f5f5] transition-colors duration-150"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-[#f5f5f5] transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-40" />
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Book a Call button */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#242424] text-white px-4 py-2 text-[13px] font-medium hover:bg-[#333] transition-colors ml-1"
        >
          <span className="h-2 w-2 rounded-full bg-[#4ade80]" />
          Book a Call
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center h-9 w-9 rounded-full hover:bg-[#f5f5f5] text-foreground transition-colors"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-4 w-4" />
        </button>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
