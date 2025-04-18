import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryYellow: "var(--primaryYellow)",
        primaryRed: "var(--primaryRed)",
      },
      fontFamily: {
        arizonia: ["var(--font-arizonia)", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;