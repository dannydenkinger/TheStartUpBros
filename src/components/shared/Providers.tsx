"use client";

import { ThemeProvider } from "next-themes";
import { ContactModalProvider } from "@/context/ContactModalContext";
import { ContactFormModal } from "@/components/shared/ContactFormModal";
import { SmoothScroll } from "@/components/shared/SmoothScroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ContactModalProvider>
        <SmoothScroll />
        {children}
        <ContactFormModal />
      </ContactModalProvider>
    </ThemeProvider>
  );
}
