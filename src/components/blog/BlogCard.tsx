"use client";

import Link from "next/link";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { ElevatedCard } from "@/components/shared/GlassCard";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <AnimateIn delay={index * 0.08}>
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <ElevatedCard className="h-full group">
          <p className="text-[12px] text-muted-foreground mb-3">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h3 className="text-[15px] font-semibold text-foreground group-hover:text-accent transition-colors duration-200 mb-2">
            {post.title}
          </h3>
          <p className="text-[13px] leading-relaxed text-muted-foreground line-clamp-3 mb-4">
            {post.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[11px] rounded-full px-2.5 py-0.5">
                {tag}
              </Badge>
            ))}
          </div>
        </ElevatedCard>
      </Link>
    </AnimateIn>
  );
}
