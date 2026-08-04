/* Route-level loading state — matches the page canvas and reserves the
 * shape of a typical page (label → headline → plates) so the swap to real
 * content doesn't jump. Static under prefers-reduced-motion. */
export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="bg-background mx-auto w-full max-w-[1600px] px-6 md:px-10 py-20 md:py-28 min-h-[calc(100svh-10rem)]"
    >
      <span className="badge-pill text-micro-label">
        <span
          aria-hidden
          className="label-dot animate-pulse motion-reduce:animate-none"
        />
        <span className="lowercase">LOADING</span>
      </span>

      <div aria-hidden className="mt-10 max-w-[900px] space-y-4">
        <div className="h-12 md:h-16 w-full rounded-lg bg-card animate-pulse motion-reduce:animate-none" />
        <div className="h-12 md:h-16 w-[72%] rounded-lg bg-card animate-pulse motion-reduce:animate-none [animation-delay:150ms]" />
      </div>

      <div
        aria-hidden
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div className="h-[220px] rounded-[20px] bg-card animate-pulse motion-reduce:animate-none" />
        <div className="h-[220px] rounded-[20px] bg-card animate-pulse motion-reduce:animate-none [animation-delay:150ms]" />
        <div className="h-[220px] rounded-[20px] bg-card animate-pulse motion-reduce:animate-none [animation-delay:300ms] sm:col-span-2 lg:col-span-1" />
      </div>
    </div>
  );
}
