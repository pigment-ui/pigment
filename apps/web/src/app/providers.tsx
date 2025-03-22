"use client";

import { ThemeProvider } from "next-themes";
import { createSlots, Provider } from "pigment-ui";
import { ReactNode, useState } from "react";

const [AppSlotsProvider, useAppSlots] = createSlots<{
  extendedVariantsAndColors: any;
  setExtendedVariantsAndColors: (value: any) => void;
  newVariant: string;
  setNewVariant: (value: string) => void;
  newColor: string;
  setNewColor: (value: string) => void;
}>();

export function Providers({ children }: { children: ReactNode }) {
  const [newVariant, setNewVariant] = useState("glass");
  const [newColor, setNewColor] = useState("tertiary");
  const [extendedVariantsAndColors, setExtendedVariantsAndColors] = useState<object>([
    { variant: "glass", className: "border-transparent bg-gradient-to-br [background-size:200%_200%;]" },
    { variant: "glass", isHovered: true, className: "[background-position:100%_100%;]" },
    { variant: "glass", color: "default", className: "from-default/10 via-default/50 to-default/10 text-default" },
    { variant: "glass", color: "inverted", className: "from-inverted/10 via-inverted/50 to-inverted/10 text-inverted" },
    { variant: "glass", color: "primary", className: "from-primary/10 via-primary/50 to-primary/10 text-primary" },
    { variant: "glass", color: "secondary", className: "from-secondary/10 via-secondary/50 to-secondary/10 text-secondary" },
    { variant: "glass", color: "tertiary", className: "from-tertiary/10 via-tertiary/50 to-tertiary/10 text-tertiary" },
    { variant: "glass", color: "info", className: "from-info/10 via-info/50 to-info/10 text-info" },
    { variant: "glass", color: "success", className: "from-success/10 via-success/50 to-success/10 text-success" },
    { variant: "glass", color: "warning", className: "from-warning/10 via-warning/50 to-warning/10 text-warning" },
    { variant: "glass", color: "error", className: "from-error/10 via-error/50 to-error/10 text-error" },
  ]);

  return (
    <AppSlotsProvider value={{ extendedVariantsAndColors, setExtendedVariantsAndColors, newVariant, setNewVariant, newColor, setNewColor }}>
      <ThemeProvider attribute="class">
        <Provider extendVariantAndColorStyles={{ variants: { variant: newVariant, color: newColor }, compoundVariants: extendedVariantsAndColors }}>
          {children}
        </Provider>
      </ThemeProvider>
    </AppSlotsProvider>
  );
}

export { useAppSlots };
