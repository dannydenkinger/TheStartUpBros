"use client";

import { AnimateIn } from "@/components/shared/AnimateIn";

const clients = [
  "TechFlow",
  "PropVault",
  "HealthSync",
  "FinBridge",
  "DataPulse",
  "CloudNine",
  "NexaPay",
  "VaultAI",
  "Thruster",
  "SeedStack",
];

export function ClientLogos() {
  return (
    <section className="px-6 lg:px-10 py-10">
      <div className="mx-auto max-w-[1000px]">
        <AnimateIn variant="fadeIn">
          <p className="text-center text-[13px] font-medium text-muted-foreground mb-8">
            Trusted by 50+ SaaS backed by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
            {clients.map((client) => (
              <span
                key={client}
                className="text-[15px] font-bold text-[#242424]/30 hover:text-[#242424]/70 transition-colors duration-300 select-none cursor-default tracking-wide uppercase"
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
