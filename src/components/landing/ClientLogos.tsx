"use client";

import { AnimateIn } from "@/components/shared/AnimateIn";

const clients = [
  "Sybill",
  "Writesonic",
  "IBM Innovation",
  "AlchemAI",
  "TPAID",
  "KEARNEY",
  "thruster",
  "JI Thrust",
  "flowstep",
  "Seedstocks",
  "Protocal",
  "INSTALL APP",
];

export function ClientLogos() {
  return (
    <section className="px-6 lg:px-10 py-12 border-t border-border">
      <div className="mx-auto max-w-[1100px]">
        <AnimateIn variant="fadeIn">
          <p className="text-center text-[13px] font-medium text-muted-foreground mb-8">
            Trusted by Leading Tech Brands to Deliver
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clients.map((client) => (
              <span
                key={client}
                className="text-[14px] font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-300 select-none cursor-default tracking-wide uppercase"
              >
                {client}
              </span>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
