"use client";

import { useState } from "react";
import { Link2, Check, Twitter, Linkedin } from "lucide-react";

interface BlogShareBarProps {
  title: string;
}

export function BlogShareBar({ title }: BlogShareBarProps) {
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

  return (
    <div className="flex items-center gap-3">
      <p className="text-[13px] font-medium text-muted-foreground mr-1">
        Share
      </p>
      <button
        onClick={copyLink}
        className="size-9 rounded-full border border-border bg-(--surface-card) shadow-sm hover:border-foreground/35 flex items-center justify-center transition-colors duration-200 cursor-pointer"
        title="Copy link"
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-(--success)" />
        ) : (
          <Link2 className="w-3.5 h-3.5 text-muted-foreground" />
        )}
      </button>
      <button
        onClick={shareToTwitter}
        className="size-9 rounded-full border border-border bg-(--surface-card) shadow-sm hover:border-foreground/35 flex items-center justify-center transition-colors duration-200 cursor-pointer"
        title="Share on X"
      >
        <Twitter className="w-3.5 h-3.5 text-muted-foreground" />
      </button>
      <button
        onClick={shareToLinkedin}
        className="size-9 rounded-full border border-border bg-(--surface-card) shadow-sm hover:border-foreground/35 flex items-center justify-center transition-colors duration-200 cursor-pointer"
        title="Share on LinkedIn"
      >
        <Linkedin className="w-3.5 h-3.5 text-muted-foreground" />
      </button>
    </div>
  );
}
