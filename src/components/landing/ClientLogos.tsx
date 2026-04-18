"use client";

import { AnimateIn } from "@/components/shared/AnimateIn";

const clients = [
  {
    name: "Linear",
    logo: (
      <svg viewBox="0 0 100 100" fill="none" className="w-5 h-5">
        <path d="M1.227 61.458a48.958 48.958 0 0 1-1.19-7.963L37.5 90.96a48.966 48.966 0 0 1-7.963-1.19L1.227 61.458Z" fill="#5E6AD2" />
        <path d="M.037 53.495a49.248 49.248 0 0 1 .862-9.494l55.1 55.1a49.25 49.25 0 0 1-9.494.862L.037 53.495ZM2.834 40.54a49.147 49.147 0 0 1 3.116-7.94l58.45 58.45a49.146 49.146 0 0 1-7.94 3.115L2.834 40.541Z" fill="#5E6AD2" />
        <path d="M9.58 27.806a49.08 49.08 0 0 1 5.69-7.196l54.12 54.12a49.08 49.08 0 0 1-7.196 5.69L9.58 27.806Z" fill="#5E6AD2" />
        <path d="M20.093 17.292A49.006 49.006 0 0 1 49.999.001c27.062 0 49 21.937 49 49a49.006 49.006 0 0 1-17.291 29.906L20.093 17.292Z" fill="#5E6AD2" />
      </svg>
    ),
  },
  {
    name: "Notion",
    logo: (
      <svg viewBox="0 0 100 100" fill="none" className="w-5 h-5">
        <path d="M6.017 4.313l55.333-4.087c6.797-.583 8.543-.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277-1.553 6.807-6.99 7.193L24.467 99.967c-4.08.193-6.023-.39-8.16-3.113L3.3 79.94c-2.333-3.113-3.3-5.443-3.3-8.167V11.113c0-3.497 1.553-6.413 6.017-6.8z" fill="#fff" />
        <path fillRule="evenodd" clipRule="evenodd" d="M61.35.227L6.017 4.313C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723.967 5.053 3.3 8.167l12.81 16.913c2.137 2.723 4.08 3.307 8.16 3.113L88.723 96.08c5.437-.387 6.99-2.917 6.99-7.193V20.64c0-2.21-.86-2.8-3.5-4.78L74.167 3.14C69.893.14 68.147-.357 61.35.227zM25.723 19.263c-5.527.34-6.783.417-9.94-2.023L8.057 11.5c-.78-.78-.39-1.75 1.36-1.943l53.11-3.887c4.473-.39 6.797 1.167 8.543 2.527l9.123 6.61c.39.197 1.36 1.36.193 1.36l-54.857 3.303.193-.207zM19.44 88.3V33.577c0-2.527.78-3.697 3.107-3.893l58.06-3.497c2.14-.193 3.107 1.167 3.107 3.693v54.527c0 2.53-.39 4.67-3.883 4.863l-55.527 3.3c-3.5.193-4.863-.97-4.863-4.27zm54.53-52.197c.39 1.75 0 3.5-1.75 3.7l-2.72.577v40.24c-2.33 1.36-4.473 2.14-6.217 2.14-2.913 0-3.69-.97-5.83-3.497L38.013 49.583V78.1l5.83 1.36s0 3.497-4.863 3.497l-13.397.78c-.39-.78 0-2.723 1.36-3.11l3.497-.97V42.717l-4.863-.39c-.39-1.75.583-4.277 3.3-4.473l14.367-.97 20.413 31.3V40.38l-4.863-.583c-.39-2.143 1.163-3.7 3.103-3.893l13.433-.8z" fill="#000" />
      </svg>
    ),
  },
  {
    name: "Arc",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="url(#arc-g)" />
        <defs>
          <linearGradient id="arc-g" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4F56" /><stop offset=".5" stopColor="#F36CDB" /><stop offset="1" stopColor="#5B5FF6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Superhuman",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Raycast",
    logo: (
      <svg viewBox="0 0 512 512" fill="none" className="w-5 h-5">
        <path d="M256.002 76.439L179.56 152.88l25.6 25.6 76.441-76.441L256.002 76.44z" fill="#FF6363" />
        <path d="M102.003 230.438l76.441-76.441 25.6 25.6-76.441 76.441-25.6-25.6z" fill="#FF6363" />
        <path d="M76.402 256.038l76.441-76.441 25.6 25.6-76.44 76.441-25.6-25.6z" fill="#FF6363" />
        <path d="M152.843 179.598l76.441-76.441 25.6 25.6-76.44 76.441-25.6-25.6z" fill="#FF6363" />
        <path d="M128.003 384.038v-51.2l25.6-25.6v76.8h-25.6zM179.203 332.838l25.6-25.6h76.8l-25.6 25.6h-76.8z" fill="#FF6363" />
        <path d="M230.403 281.638l25.6-25.6L332.843 332.878l-25.6 25.6-76.84-76.84z" fill="#FF6363" />
        <path d="M281.603 230.438l25.6-25.6 76.84 76.84-25.6 25.6-76.84-76.84z" fill="#FF6363" />
        <path d="M332.803 179.238l25.6-25.6v76.8h-25.6v-51.2z" fill="#FF6363" />
        <path d="M384.003 128.038v51.2h-25.6v-76.8h76.8l-25.6 25.6h-25.6z" fill="#FF6363" />
      </svg>
    ),
  },
  {
    name: "Loops",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#4353FF" strokeWidth="2.5" />
        <path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0z" fill="#4353FF" />
      </svg>
    ),
  },
  {
    name: "Mercury",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" fill="#6049E0" />
        <path d="M7 12h10M12 7v10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Attio",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M3 17V7l9 10 9-10v10" stroke="#FF5722" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Cursor",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="6" fill="#000" stroke="#fff" strokeWidth="1" />
        <path d="M8 8l8 4-8 4V8z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Perplexity",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2L4 8v8l8 6 8-6V8l-8-6z" stroke="#20808D" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 2v20M4 8l8 6 8-6" stroke="#20808D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Pitch",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" fill="#73629A" />
        <path d="M10 8l6 4-6 4V8z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Campsite",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 3L2 20h20L12 3z" fill="#F59E0B" />
        <path d="M12 10v4M12 16v1" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function ClientLogos() {
  return (
    <section className="px-6 lg:px-10 py-12 border-t border-border">
      <div className="mx-auto max-w-[1100px]">
        <AnimateIn variant="fadeIn">
          <p className="text-center text-[13px] font-medium text-muted-foreground mb-8">
            Inspired by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300 select-none cursor-default"
              >
                {client.logo}
                <span className="text-[13px] font-semibold tracking-wide uppercase">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
