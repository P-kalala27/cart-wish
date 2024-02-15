/** @type {import('tailwindcss').Config} */
export default  {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes:{
        fadeIn:{
          '0%': {opacity:0},
          '100%': {opacity :1}
        }
      }
    },
  },
  plugins: [],
}