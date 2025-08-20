/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold-primary': '#BF9C4C',
        'gold-hover': '#A6873D',
        'gold-light': 'rgba(191, 156, 76, 0.1)',
      }
    },
  },
  plugins: [],
}