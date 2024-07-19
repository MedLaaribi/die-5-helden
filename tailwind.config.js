/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#50D4F2',
        secondary: '#30D979',
        yellow: '#F2CF1D',
        orange: '#F2911B',
        darkOrange: '#F26B1D',
      },
    },
  },
  plugins: [],
};
