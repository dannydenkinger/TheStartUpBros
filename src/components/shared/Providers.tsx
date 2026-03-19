"use client";

import { ThemeProvider } from "next-themes";
import { ContactModalProvider } from "@/context/ContactModalContext";
import { ContactFormModal } from "@/components/shared/ContactFormModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <ContactModalProvider>
        {children}
        <ContactFormModal />
      </ContactModalProvider>
    </ThemeProvider>
  );
}
