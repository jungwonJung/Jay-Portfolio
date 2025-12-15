/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        brand: "#6e06f2",
        brandGreen: "#5be9b9",
        brandWhite: "#ffffff",
        brandNavy: "#141c3a",
        brandMagenta: "#e3cffe",
      },
    },
  },
  plugins: [],
};
