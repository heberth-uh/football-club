/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-palmares': "url('./src/images/palmares-bg.jpg')",
        'hero-pattern': "url('./src/images/hero-pattern.svg')",
      }
    },
  },
  plugins: [],
}
