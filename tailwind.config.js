/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // iOS System Colors
        iosGroupedBg: {
          light: '#F2F2F7',
          dark: '#000000',
        },
        iosSecondaryBg: {
          light: '#FFFFFF',
          dark: '#1C1C1E',
        },
        iosSeparator: {
          light: '#C6C6C8',
          dark: '#38383A',
        },
        iosLabel: {
          light: '#000000',
          dark: '#FFFFFF',
        },
        iosSecondaryLabel: {
          light: '#3C3C43',
          dark: '#EBEBF5',
        },
        iosTertiaryLabel: {
          light: '#3C3C4399',
          dark: '#EBEBF599',
        },
      },
      fontFamily: {
        ios: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"Helvetica Neue"', 'sans-serif'],
      },
      borderRadius: {
        ios: '10px',
        iosLarge: '12px',
      },
    },
  },
  plugins: [],
};
