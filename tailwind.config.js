const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-unb)', ...fontFamily.serif],
      },
      colors: {
        cream: '#FFFCE4',
        red: '#CE4257',
        black: '#040F0F',
      },
    },
  },
  plugins: [],
};
