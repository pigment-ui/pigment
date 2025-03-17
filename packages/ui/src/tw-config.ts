import type { Config } from "tailwindcss";
import twAnimation from "tailwindcss-animate";

// We want each package to be responsible for its own content.
export const twConfig: Config = {
  content: [],
  theme: {
    extend: {
      colors: {
        default: {
          DEFAULT: "rgb(var(--pigment-default-1000) / <alpha-value>)",
          foreground: "rgb(var(--pigment-default-0) / <alpha-value>)",
          0: "rgb(var(--pigment-default-0) / <alpha-value>)",
          50: "rgb(var(--pigment-default-50) / <alpha-value>)",
          100: "rgb(var(--pigment-default-100) / <alpha-value>)",
          200: "rgb(var(--pigment-default-200) / <alpha-value>)",
          300: "rgb(var(--pigment-default-300) / <alpha-value>)",
          400: "rgb(var(--pigment-default-400) / <alpha-value>)",
          500: "rgb(var(--pigment-default-500) / <alpha-value>)",
          600: "rgb(var(--pigment-default-600) / <alpha-value>)",
          700: "rgb(var(--pigment-default-700) / <alpha-value>)",
          800: "rgb(var(--pigment-default-800) / <alpha-value>)",
          900: "rgb(var(--pigment-default-900) / <alpha-value>)",
          950: "rgb(var(--pigment-default-950) / <alpha-value>)",
          1000: "rgb(var(--pigment-default-1000) / <alpha-value>)",
        },
        inverted: {
          DEFAULT: "rgb(var(--pigment-default-0) / <alpha-value>)",
          foreground: "rgb(var(--pigment-default-1000) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--pigment-primary-500) / <alpha-value>)",
          foreground: "rgb(var(--pigment-default-0) / <alpha-value>)",
          50: "rgb(var(--pigment-primary-50) / <alpha-value>)",
          100: "rgb(var(--pigment-primary-100) / <alpha-value>)",
          200: "rgb(var(--pigment-primary-200) / <alpha-value>)",
          300: "rgb(var(--pigment-primary-300) / <alpha-value>)",
          400: "rgb(var(--pigment-primary-400) / <alpha-value>)",
          500: "rgb(var(--pigment-primary-500) / <alpha-value>)",
          600: "rgb(var(--pigment-primary-600) / <alpha-value>)",
          700: "rgb(var(--pigment-primary-700) / <alpha-value>)",
          800: "rgb(var(--pigment-primary-800) / <alpha-value>)",
          900: "rgb(var(--pigment-primary-900) / <alpha-value>)",
          950: "rgb(var(--pigment-primary-950) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--pigment-secondary-500) / <alpha-value>)",
          foreground: "rgb(var(--pigment-default-0) / <alpha-value>)",
          50: "rgb(var(--pigment-secondary-50) / <alpha-value>)",
          100: "rgb(var(--pigment-secondary-100) / <alpha-value>)",
          200: "rgb(var(--pigment-secondary-200) / <alpha-value>)",
          300: "rgb(var(--pigment-secondary-300) / <alpha-value>)",
          400: "rgb(var(--pigment-secondary-400) / <alpha-value>)",
          500: "rgb(var(--pigment-secondary-500) / <alpha-value>)",
          600: "rgb(var(--pigment-secondary-600) / <alpha-value>)",
          700: "rgb(var(--pigment-secondary-700) / <alpha-value>)",
          800: "rgb(var(--pigment-secondary-800) / <alpha-value>)",
          900: "rgb(var(--pigment-secondary-900) / <alpha-value>)",
          950: "rgb(var(--pigment-secondary-950) / <alpha-value>)",
        },
        info: {
          DEFAULT: "rgb(var(--pigment-info-500) / <alpha-value>)",
          foreground: "rgb(var(--pigment-default-0) / <alpha-value>)",
          50: "rgb(var(--pigment-info-50) / <alpha-value>)",
          100: "rgb(var(--pigment-info-100) / <alpha-value>)",
          200: "rgb(var(--pigment-info-200) / <alpha-value>)",
          300: "rgb(var(--pigment-info-300) / <alpha-value>)",
          400: "rgb(var(--pigment-info-400) / <alpha-value>)",
          500: "rgb(var(--pigment-info-500) / <alpha-value>)",
          600: "rgb(var(--pigment-info-600) / <alpha-value>)",
          700: "rgb(var(--pigment-info-700) / <alpha-value>)",
          800: "rgb(var(--pigment-info-800) / <alpha-value>)",
          900: "rgb(var(--pigment-info-900) / <alpha-value>)",
          950: "rgb(var(--pigment-info-950) / <alpha-value>)",
        },
        success: {
          DEFAULT: "rgb(var(--pigment-success-500) / <alpha-value>)",
          foreground: "rgb(var(--pigment-default-0) / <alpha-value>)",
          50: "rgb(var(--pigment-success-50) / <alpha-value>)",
          100: "rgb(var(--pigment-success-100) / <alpha-value>)",
          200: "rgb(var(--pigment-success-200) / <alpha-value>)",
          300: "rgb(var(--pigment-success-300) / <alpha-value>)",
          400: "rgb(var(--pigment-success-400) / <alpha-value>)",
          500: "rgb(var(--pigment-success-500) / <alpha-value>)",
          600: "rgb(var(--pigment-success-600) / <alpha-value>)",
          700: "rgb(var(--pigment-success-700) / <alpha-value>)",
          800: "rgb(var(--pigment-success-800) / <alpha-value>)",
          900: "rgb(var(--pigment-success-900) / <alpha-value>)",
          950: "rgb(var(--pigment-success-950) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "rgb(var(--pigment-warning-500) / <alpha-value>)",
          foreground: "rgb(var(--pigment-default-0) / <alpha-value>)",
          50: "rgb(var(--pigment-warning-50) / <alpha-value>)",
          100: "rgb(var(--pigment-warning-100) / <alpha-value>)",
          200: "rgb(var(--pigment-warning-200) / <alpha-value>)",
          300: "rgb(var(--pigment-warning-300) / <alpha-value>)",
          400: "rgb(var(--pigment-warning-400) / <alpha-value>)",
          500: "rgb(var(--pigment-warning-500) / <alpha-value>)",
          600: "rgb(var(--pigment-warning-600) / <alpha-value>)",
          700: "rgb(var(--pigment-warning-700) / <alpha-value>)",
          800: "rgb(var(--pigment-warning-800) / <alpha-value>)",
          900: "rgb(var(--pigment-warning-900) / <alpha-value>)",
          950: "rgb(var(--pigment-warning-950) / <alpha-value>)",
        },
        error: {
          DEFAULT: "rgb(var(--pigment-error-500) / <alpha-value>)",
          foreground: "rgb(var(--pigment-default-0) / <alpha-value>)",
          50: "rgb(var(--pigment-error-50) / <alpha-value>)",
          100: "rgb(var(--pigment-error-100) / <alpha-value>)",
          200: "rgb(var(--pigment-error-200) / <alpha-value>)",
          300: "rgb(var(--pigment-error-300) / <alpha-value>)",
          400: "rgb(var(--pigment-error-400) / <alpha-value>)",
          500: "rgb(var(--pigment-error-500) / <alpha-value>)",
          600: "rgb(var(--pigment-error-600) / <alpha-value>)",
          700: "rgb(var(--pigment-error-700) / <alpha-value>)",
          800: "rgb(var(--pigment-error-800) / <alpha-value>)",
          900: "rgb(var(--pigment-error-900) / <alpha-value>)",
          950: "rgb(var(--pigment-error-950) / <alpha-value>)",
        },

        focus: "rgb(var(--pigment-default-1000) / <alpha-value>)",
      },
    },
  },

  plugins: [twAnimation],
};
