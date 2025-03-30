import { twConfig } from "pigment-ui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}"],
  presets: [twConfig],
  darkMode: "class",
  theme: {
    extend: {
      screens: { sm: "600px", md: "900px", lg: "1200px" },
      container: { center: true, padding: "1rem", screens: { lg: "1200px" } },
    },
  },
};

export default config;
