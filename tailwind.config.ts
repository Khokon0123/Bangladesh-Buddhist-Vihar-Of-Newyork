import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Buddhist-inspired color palette
        maroon: {
          50: "#faf5f5",
          100: "#f5e8e8",
          200: "#ead1d1",
          300: "#d9b0b0",
          400: "#c48585",
          500: "#b06666", // Base maroon
          600: "#9d4e4e",
          700: "#8b3d3d",
          800: "#7a2f2f",
          900: "#6b2525", // Deep maroon
          950: "#4a1515",
        },
        gold: {
          50: "#fffef7",
          100: "#fffce8",
          200: "#fff8c5",
          300: "#fff297",
          400: "#ffe668",
          500: "#ffd93d", // Base gold
          600: "#f5c21a",
          700: "#d4a017",
          800: "#b0801a",
          900: "#91681a",
          950: "#4d3609",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
        // Semantic color aliases
        background: "#ffffff",
        foreground: "#171717",
        primary: {
          DEFAULT: "#8b3d3d", // maroon-700
          light: "#b06666", // maroon-500
          dark: "#6b2525", // maroon-900
        },
        accent: {
          DEFAULT: "#f5c21a", // gold-600
          light: "#ffd93d", // gold-500
          dark: "#d4a017", // gold-700
        },
      },
      fontFamily: {
        // Calm, readable fonts using Next.js font optimization
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        serif: [
          "var(--font-merriweather)",
          '"Times New Roman"',
          "Times",
          "Georgia",
          "serif",
        ],
        // For quotes and special text
        quote: [
          "var(--font-merriweather)",
          "Georgia",
          '"Times New Roman"',
          "serif",
        ],
      },
      fontSize: {
        // Typography scale - calm and readable
        xs: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.025em" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.01em" }], // 14px
        base: ["1rem", { lineHeight: "1.75", letterSpacing: "0" }], // 16px - body text
        lg: ["1.125rem", { lineHeight: "1.75", letterSpacing: "-0.01em" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.75", letterSpacing: "-0.015em" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "1.5", letterSpacing: "-0.02em" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "1.4", letterSpacing: "-0.025em" }], // 30px - h3
        "4xl": ["2.25rem", { lineHeight: "1.3", letterSpacing: "-0.03em" }], // 36px - h2
        "5xl": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.035em" }], // 48px - h1
        "6xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.04em" }], // 60px - display
        // Quote-specific sizes
        "quote-sm": ["1.125rem", { lineHeight: "1.8", letterSpacing: "0.01em" }], // 18px
        "quote-base": ["1.25rem", { lineHeight: "1.8", letterSpacing: "0.015em" }], // 20px
        "quote-lg": ["1.5rem", { lineHeight: "1.8", letterSpacing: "0.02em" }], // 24px
        "quote-xl": ["1.875rem", { lineHeight: "1.75", letterSpacing: "0.025em" }], // 30px
      },
      spacing: {
        // Generous spacing system based on 4px base unit
        // Creates peaceful, breathable layouts
        "18": "4.5rem", // 72px
        "22": "5.5rem", // 88px
        "26": "6.5rem", // 104px
        "30": "7.5rem", // 120px
        "34": "8.5rem", // 136px
        "38": "9.5rem", // 152px
        "42": "10.5rem", // 168px
        "46": "11.5rem", // 184px
        "50": "12.5rem", // 200px
      },
      borderRadius: {
        // Soft, gentle curves - not too sharp, not too round
        none: "0",
        sm: "0.125rem", // 2px - subtle
        DEFAULT: "0.375rem", // 6px - default
        md: "0.5rem", // 8px - medium
        lg: "0.75rem", // 12px - large
        xl: "1rem", // 16px - extra large
        "2xl": "1.5rem", // 24px - very large
        "3xl": "2rem", // 32px - extra gentle
        full: "9999px", // fully rounded
      },
      boxShadow: {
        // Subtle, soft shadows - creates depth without harshness
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -4px rgba(0, 0, 0, 0.06)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.06), 0 8px 10px -6px rgba(0, 0, 0, 0.06)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.03)",
        // Buddhist-themed soft shadows
        "soft": "0 2px 8px rgba(139, 61, 61, 0.08)", // maroon tint
        "soft-gold": "0 2px 8px rgba(245, 194, 26, 0.12)", // gold tint
        "gentle": "0 4px 12px rgba(0, 0, 0, 0.04)",
        none: "none",
      },
    },
  },
  plugins: [],
};
export default config;
