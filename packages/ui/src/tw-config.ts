import twAnimation from "tailwindcss-animate";

// We want each package to be responsible for its own content.
export const twConfig: any = {
  content: [],
  theme: {
    extend: {
      colors: {
        default: {
          DEFAULT: "oklch(var(--pigment-default-1000) / <alpha-value>)",
          foreground: "oklch(var(--pigment-default-0) / <alpha-value>)",
          0: "oklch(var(--pigment-default-0) / <alpha-value>)",
          50: "oklch(var(--pigment-default-50) / <alpha-value>)",
          100: "oklch(var(--pigment-default-100) / <alpha-value>)",
          200: "oklch(var(--pigment-default-200) / <alpha-value>)",
          300: "oklch(var(--pigment-default-300) / <alpha-value>)",
          400: "oklch(var(--pigment-default-400) / <alpha-value>)",
          500: "oklch(var(--pigment-default-500) / <alpha-value>)",
          600: "oklch(var(--pigment-default-600) / <alpha-value>)",
          700: "oklch(var(--pigment-default-700) / <alpha-value>)",
          800: "oklch(var(--pigment-default-800) / <alpha-value>)",
          900: "oklch(var(--pigment-default-900) / <alpha-value>)",
          950: "oklch(var(--pigment-default-950) / <alpha-value>)",
          1000: "oklch(var(--pigment-default-1000) / <alpha-value>)",
        },
        inverted: {
          DEFAULT: "oklch(var(--pigment-default-0) / <alpha-value>)",
          foreground: "oklch(var(--pigment-default-1000) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "oklch(var(--pigment-primary) / <alpha-value>)",
          foreground: "oklch(var(--pigment-default-0) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--pigment-secondary) / <alpha-value>)",
          foreground: "oklch(var(--pigment-default-0) / <alpha-value>)",
        },
        info: {
          asd: "oklch(var(--pigment-info) / <alpha-value>)",
          DEFAULT: "oklch(var(--pigment-info) / <alpha-value>)",
          foreground: "oklch(var(--pigment-default-0) / <alpha-value>)",
        },
        success: {
          DEFAULT: "oklch(var(--pigment-success) / <alpha-value>)",
          foreground: "oklch(var(--pigment-default-0) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "oklch(var(--pigment-warning) / <alpha-value>)",
          foreground: "oklch(var(--pigment-default-0) / <alpha-value>)",
        },
        error: {
          DEFAULT: "oklch(var(--pigment-error) / <alpha-value>)",
          foreground: "oklch(var(--pigment-default-0) / <alpha-value>)",
        },

        focus: "oklch(var(--pigment-default-1000) / <alpha-value>)",
      },
    },
  },

  plugins: [twAnimation],
};
