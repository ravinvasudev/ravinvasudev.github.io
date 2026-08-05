import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#030712",
        navy: "#0A192F",
        cobalt: "#2563EB",
        gold: "#D4AF37",
      },
      boxShadow: {
        panel: "0 18px 40px rgba(0, 0, 0, 0.35)",
      },
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-ibm-plex)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [typography],
};

export default config;
