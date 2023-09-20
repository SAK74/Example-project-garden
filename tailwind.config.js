/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
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
};
