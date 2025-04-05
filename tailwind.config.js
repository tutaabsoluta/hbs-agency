/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.{hbs,html,js}",
    "./src/layout/*.{hbs,html,js}",
  ],
  safelist: [
'.header-fade', 'text-terciary', 'font-bold'
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#011627',
        'secondary': '#00C9E0',
        'terciary': '#41EAD4'
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'], 
      },
    },
  },
  plugins: [],
}