/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      grey: "hsl(0, 0%, 50%)",
      black: "hsl(0, 0%, 7%)",
      yellow: "hsl(47, 88%, 63%)",
    },
    extend: {
      fontFamily: {
        primary: ["Figtree", "sans-serif"],
      },
      spacing: {}
    },
  },
  plugins: [],
};

