const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,js}"],
  theme: {
    fontFamily: {
      inter: ["Inter Variable"],
    },
    extend: {
      colors: {
        pink: "#DCC1AB",
        green: "#1B5B31",
        // ofer: "#F5F0EC",
        _black: "#111111",
        _grey: "#f5f0ec",
      },
      screens: {
        ...defaultTheme.screens,
        "3xs": "1600px",
      },
      backgroundImage: {
        hero: 'url("../assets/Hero.png")',
        about: 'url("../assets/About.png")',
      },
      cursor: {
        // cross: "url(../assets/custom-svg/cross.svg)",
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
