"use client";

import { ThemeProvider } from "next-themes";
import { ContactModalProvider } from "@/context/ContactModalContext";
import { ContactFormModal } from "@/components/shared/ContactFormModal";
import { ContactAttributionCapture } from "@/components/shared/ContactAttributionCapture";
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
        <ContactAttributionCapture />
        {children}
        <ContactFormModal />
      </ContactModalProvider>
    </ThemeProvider>
  );
}
