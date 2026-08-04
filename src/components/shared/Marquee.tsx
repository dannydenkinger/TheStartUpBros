"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  duration?: number;
  pauseOnHover?: boolean;
  direction?: "left" | "right" | "up" | "down";
  fade?: boolean;
  fadeAmount?: number;
}

export function Marquee({
  children,
  className,
  duration = 20,
  pauseOnHover = false,
  direction = "left",
  fade = true,
  fadeAmount = 10,
  ...props
}: MarqueeProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = React.useState(false);

  const items = React.Children.toArray(children);
  const isVertical = direction === "up" || direction === "down";

  /* Direction maps onto the four shared keyframes in globals.css; the rail
   * itself (.marquee-scroller) is defined there once and reads these two
   * custom properties, so several marquees can coexist on one page. */
  const animationName = isVertical
    ? direction === "up"
      ? "marquee-up"
      : "marquee-down"
    : direction === "left"
      ? "marquee"
      : "marquee-reverse";

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex w-full overflow-hidden",
        isVertical && "flex-col",
        className,
      )}
      style={{
        ...(fade && {
          maskImage: isVertical
            ? `linear-gradient(to bottom, transparent 0%, black ${fadeAmount}%, black ${
              100 - fadeAmount
            }%, transparent 100%)`
            : `linear-gradient(to right, transparent 0%, black ${fadeAmount}%, black ${
              100 - fadeAmount
            }%, transparent 100%)`,
          WebkitMaskImage: isVertical
            ? `linear-gradient(to bottom, transparent 0%, black ${fadeAmount}%, black ${
              100 - fadeAmount
            }%, transparent 100%)`
            : `linear-gradient(to right, transparent 0%, black ${fadeAmount}%, black ${
              100 - fadeAmount
            }%, transparent 100%)`,
        }),
      }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      {...props}
    >
      <div
        className={cn(
          "marquee-scroller flex shrink-0",
          isVertical && "flex-col",
          isPaused && "paused",
        )}
        style={
          {
            "--marquee-name": animationName,
            "--marquee-duration": `${duration}s`,
          } as React.CSSProperties
        }
      >
        {items.map((item, index) => (
          <div
            key={`first-${index}`}
            className={cn("flex shrink-0", isVertical && "w-full")}
          >
            {item}
          </div>
        ))}
        {items.map((item, index) => (
          <div
            key={`second-${index}`}
            className={cn("flex shrink-0", isVertical && "w-full")}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
