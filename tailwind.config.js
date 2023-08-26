const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,js}"],
  theme: {
    extend: {
      colors: { custom: colors.amber },
      screens: {
        ...defaultTheme.screens,
        "3xs": "1600px",
      },
      backgroundImage: {
        hero: 'url("../assets/Hero.png")',
      },
    },
    container: {
      // padding: {
      //   DEFAULT: 0,
      //   lg: "4rem",
      //   md: "2rem",
      //   // sm: 0,
      // },
      center: true,
    },
  },
  plugins: [],
  darkMode: "class",
};
