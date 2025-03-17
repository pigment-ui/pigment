"use client";

import { ThemeProvider } from "next-themes";
import { Provider } from "pigment-ui";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <Provider>{children}</Provider>
    </ThemeProvider>
  );
}
