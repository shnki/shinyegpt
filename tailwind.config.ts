import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeIn .5s ease-in-out',
        fadeAndSlideIn: 'fadeAndSlideIn .5s ease-in-out',
        fadeInFromBottom: 'fadeInFromBottom .5s ease-in-out',

      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeAndSlideIn: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' }, // Move from left
          '100%': { opacity: 1, transform: 'translateX(0)' },   // Fade in
        },
        fadeInFromBottom: {
          '0%': { opacity: 0, transform: 'translateY(20px)' }, // Move from bottom
          '100%': { opacity: 1, transform: 'translateY(0)' },  // Fade in
        },

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
