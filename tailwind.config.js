/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1B3A6B",
        "navy-dark": "#0F2347",
        "navy-black": "#080E1C",
        gold: "#C9A84C",
        charcoal: "#1A1F2E",
        "soft-gray": "#64748B",
        "warm-white": "#F8F7F2",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}