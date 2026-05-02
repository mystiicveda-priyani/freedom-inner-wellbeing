import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F4C45",
          dark: "#0B3B36",
          light: "#1A6B62",
        },
        sage: {
          DEFAULT: "#8DA27E",
          light: "#B3C4A6",
        },
        gold: {
          DEFAULT: "#C9A35A",
          light: "#DBB87A",
          pale: "#F0E4C8",
        },
        ivory: "#F8F7F2",
        mist: "#EAEAEA",
        charcoal: {
          DEFAULT: "#2D2D2D",
          soft: "#4A4A4A",
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        cormorant: ['"Cormorant Garamond"', "serif"],
        inter: ['"Inter"', "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease both",
        "fade-in": "fadeIn 1.2s ease both",
        "float": "float 6s ease-in-out infinite",
        "slide-in": "slideIn 0.6s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      boxShadow: {
        "premium": "0 20px 60px rgba(15, 76, 69, 0.15)",
        "premium-sm": "0 8px 24px rgba(15, 76, 69, 0.08)",
        "gold": "0 10px 30px rgba(201, 163, 90, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
