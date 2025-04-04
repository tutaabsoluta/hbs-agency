/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/views/**/*.hbs",
    "./src/public/**/*.html",
    "./src/public/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],

}