import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#030712",
        surface: "#0A192F",
        "surface-raised": "#0F2440",
        cobalt: {
          DEFAULT: "#2563EB",
          soft: "#3B82F6",
        },
        gold: "#D4AF37",
        ink: "#F9FAFB",
        muted: "#9CA3AF",
        hairline: "rgba(148, 163, 184, 0.16)",
      },
      boxShadow: {
        panel: "0 18px 40px rgba(2, 6, 23, 0.55)",
        glow: "0 0 0 1px rgba(37, 99, 235, 0.35), 0 20px 45px rgba(37, 99, 235, 0.12)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        shell: "1180px",
      },
      keyframes: {
        "grid-drift": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(0, -60px, 0)" },
        },
      },
      animation: {
        "grid-drift": "grid-drift 18s linear infinite",
      },
      typography: {
        invert: {
          css: {
            "--tw-prose-invert-links": "#3B82F6",
            "--tw-prose-invert-bullets": "#D4AF37",
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
