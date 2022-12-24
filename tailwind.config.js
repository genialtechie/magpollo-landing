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
        theme: '#fcf6ee',
        orange: '#eb4511',
        custom: '#432818',
      },
    },
  },
  plugins: [],
};
