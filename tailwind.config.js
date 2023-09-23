const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,js}"],
  theme: {
    fontFamily: {
      inter: ["Inter Variable"],
    },
    extend: {
      colors: {
        // custom: colors.amber,
        green: "#1B5B31",
        ofer: "#F5F0EC",
      },
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
  // darkMode: "class",
};
