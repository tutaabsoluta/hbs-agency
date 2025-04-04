/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.{hbs,html,js}",
    "./src/views/*.{hbs,html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#011627',
        'secondary': '#00C9E0',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'], 
      },
    },
  },
  plugins: [],
}