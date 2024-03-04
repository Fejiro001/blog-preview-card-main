/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      grey: "hsl(0, 0%, 35%)",
      black: "hsl(0, 0%, 7%)",
      yellow: "hsl(47, 88%, 63%)",
    },
    extend: {
      fontFamily: {
        primary: ["Figtree", "sans-serif"],
      },
      fontSize: {
        heading1: "clamp(1.25rem, 1.6vw, 3rem)",
        paragraph1: "clamp(0.875rem, 1.1vw, 2rem)",
        label: "clamp(0.75rem, 1vw, 1.5rem)"
      }
    },
  },
  plugins: [],
};

