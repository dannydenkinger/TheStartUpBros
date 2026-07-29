"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={cn("w-16 h-8", className)} />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={cn(
        "flex w-16 h-8 p-1 rounded-[2px] cursor-pointer bg-secondary border border-border transition-colors duration-200",
        className
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div className="flex justify-between items-center w-full">
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full bg-foreground transition-transform duration-300",
            isDark ? "translate-x-0" : "translate-x-8"
          )}
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-background" strokeWidth={1.5} />
          ) : (
            <Sun className="w-3.5 h-3.5 text-background" strokeWidth={1.5} />
          )}
        </div>
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6",
            isDark ? "translate-x-0" : "-translate-x-8"
          )}
        >
          {isDark ? (
            <Sun
              className="w-3.5 h-3.5 text-muted-foreground/60"
              strokeWidth={1.5}
            />
          ) : (
            <Moon
              className="w-3.5 h-3.5 text-muted-foreground/60"
              strokeWidth={1.5}
            />
          )}
        </div>
      </div>
    </button>
  );
}
