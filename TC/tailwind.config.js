/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {},
    colors: {
      "dark-blue": "#112B3C",
      blue: "#205375",
      orange: "#F66B02",
      grey: "#EFEFEF",
    },
    fontFamily: {
      "Open-sans": ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
