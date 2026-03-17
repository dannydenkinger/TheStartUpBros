import { cn } from "@/lib/utils";

interface DeviceMockupProps {
  type: "macbook" | "iphone";
  children: React.ReactNode;
  className?: string;
}

export function DeviceMockup({ type, children, className }: DeviceMockupProps) {
  if (type === "iphone") {
    return (
      <div
        className={cn(
          "relative mx-auto w-[200px] rounded-[2rem] border-4 border-gray-200 bg-gray-900 p-2 shadow-2xl",
          className
        )}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-xl z-10" />
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[1.5rem] bg-card aspect-[9/19.5]">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[600px]",
        className
      )}
    >
      {/* Screen */}
      <div className="rounded-t-xl border-2 border-b-0 border-gray-200 bg-gray-900 p-3">
        <div className="overflow-hidden rounded-md bg-card aspect-[16/10]">
          {children}
        </div>
      </div>
      {/* Base */}
      <div className="mx-auto h-3 w-full rounded-b-lg bg-gray-200" />
      <div className="mx-auto h-1 w-[60%] rounded-b-md bg-gray-100" />
    </div>
  );
}
