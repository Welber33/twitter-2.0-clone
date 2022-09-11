/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        twitter: '#00ADED',
        twitter_dark: '#009bd5',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
