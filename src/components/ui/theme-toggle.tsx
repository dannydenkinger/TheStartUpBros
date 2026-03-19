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
        "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300",
        isDark
          ? "bg-white/[0.06] border border-white/10"
          : "bg-white border border-[#e3e3e3]",
        className
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div className="flex justify-between items-center w-full">
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            isDark
              ? "translate-x-0 bg-white/10"
              : "translate-x-8 bg-gray-200"
          )}
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
          ) : (
            <Sun className="w-3.5 h-3.5 text-gray-700" strokeWidth={1.5} />
          )}
        </div>
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full",
            isDark ? "bg-transparent" : "-translate-x-8"
          )}
        >
          {isDark ? (
            <Sun className="w-3.5 h-3.5 text-white/40" strokeWidth={1.5} />
          ) : (
            <Moon className="w-3.5 h-3.5 text-black/40" strokeWidth={1.5} />
          )}
        </div>
      </div>
    </button>
  );
}
