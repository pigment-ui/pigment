"use client";

import "../../../../packages/ui/src/colors.css";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <>{children}</>
    </ThemeProvider>
  );
}
