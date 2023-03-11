/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        clrfigma: '#7f56da'
      },
      backgroundImage : {
        'Poto':"url('/img/poto.png')",
      }
    },
  },
  plugins: [],
}
