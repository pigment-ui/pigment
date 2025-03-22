import { twConfig } from "pigment-ui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}"],
  presets: [twConfig],
  darkMode: "class",
  theme: {
    extend: {
      container: { center: true, padding: "1rem", screens: { xl: "1280px" } },
      colors: {
        tertiary: {
          DEFAULT: "oklch(0.585 0.233 277.117 / <alpha-value>)",
          foreground: "oklch(var(--pigment-default-1000) / <alpha-value>)",
        },
      },
    },
  },
};

export default config;
