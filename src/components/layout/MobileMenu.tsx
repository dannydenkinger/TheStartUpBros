"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { navigationItems } from "@/data/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="bg-background border-border w-80">
        <SheetHeader>
          <SheetTitle className="text-foreground text-left">
            Startup Bros
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-8 flex flex-col gap-2">
          {navigationItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block rounded-md px-3 py-3 text-base text-foreground hover:bg-secondary transition-colors"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-4 flex flex-col gap-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-4 border-t border-border pt-4">
            <Link
              href="/contact"
              onClick={onClose}
              className="block rounded-lg bg-accent px-4 py-3 text-center text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
