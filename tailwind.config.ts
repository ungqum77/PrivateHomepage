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
        // Salt and Pepper Palette
        "salt-white": "#FFFFFF",
        "pepper-black": "#000000",
        "muted-gray": "#D4D4D4",
        "border-gray": "#B3B3B3",
        "dark-accent": "#2B2B2B",
        
        // Obsidian Gallery Palette (from DESIGN.md & code.html)
        primary: "#ffffff",
        background: "#000000",
        surface: "#131313",
        "surface-container": "#1f1f1f",
        "surface-container-low": "#1b1b1b",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353535",
        "on-surface": "#e2e2e2",
        "on-surface-variant": "#c6c6c6",
        outline: "#919191",
        "outline-variant": "#474747",
        "on-primary": "#1a1c1c",
      },
      borderRadius: {
        none: "0px",
        sm: "0px",
        DEFAULT: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "9999px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.02em",
        widest: "0.2em",
        "ultra-wide": "0.3em",
      },
    },
  },
  plugins: [],
};
export default config;
