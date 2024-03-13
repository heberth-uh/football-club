/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/svg/hero-pattern.svg')",
        'hexagon-pattern': "url('./src/assets/svg/hexagon-pattern.svg')",
        'palmares': "url('./src/assets/palmares-bg.jpg')",
      }
    },
  },
  plugins: [],
}
