"use client";

import { useState } from "react";
import { Link2, Check, Twitter, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogShareBarProps {
  title: string;
  /** "row" — inline label + buttons; "rail" — stacked label above buttons for the ToC sidebar. */
  variant?: "row" | "rail";
}

export function BlogShareBar({ title, variant = "row" }: BlogShareBarProps) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank"
    );
  };

  const shareToLinkedin = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank"
    );
  };

  // Flat tonal buttons — no borders or shadows, card tone on canvas.
  const btnClass =
    "size-9 rounded-full bg-card hover:bg-(--surface-card-hover) text-muted-foreground hover:text-foreground flex items-center justify-center transition-colors duration-200 cursor-pointer";

  return (
    <div
      className={cn(
        variant === "rail"
          ? "flex flex-col items-start gap-3"
          : "flex items-center gap-3"
      )}
    >
      <p
        className={cn(
          "text-micro-label text-muted-foreground",
          variant === "row" && "mr-1"
        )}
      >
        <span className="lowercase">Share</span>
      </p>
      <div className="flex items-center gap-2">
        <button onClick={copyLink} className={btnClass} title="Copy link">
          {copied ? (
            <Check className="w-3.5 h-3.5 text-(--success)" />
          ) : (
            <Link2 className="w-3.5 h-3.5" />
          )}
        </button>
        <button
          onClick={shareToTwitter}
          className={btnClass}
          title="Share on X"
        >
          <Twitter className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={shareToLinkedin}
          className={btnClass}
          title="Share on LinkedIn"
        >
          <Linkedin className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
