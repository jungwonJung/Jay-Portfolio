/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#6e06f2",
        brandGreen: "#5be9b9",
        brandWhite: "#ffffff",
        barndNavy: "#141c3a",
      },
      backgroundImage: {
        main: `url('../public/Main.svg')`,
      },
    },
  },
  plugins: [],
};
