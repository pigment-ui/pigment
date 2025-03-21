// pigment-ui.d.ts
import "pigment-ui";

// Import the module to ensure augmentation works

declare module "pigment-ui" {
  // Extend the existing Variants type
  export type Variants = "solid" | "soft" | "light" | "bordered" | "ghost" | "faded" | "card" | "gradient" | "animated" | "shadow" | "glass";
}
