/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'working-img' : "url('src/assets/work-proceess.webp')"
      },
      fontFamily: {
        'primary' : ["Poppins", "sans-serif"],
        'secondary' : ["Syne", "sans-serif"]
      },
      colors: {
        'heroBgClr' :  "#325343",
        'para':"rgb(0 0 0 / 80%)",
        'primary': '#F0E8D0'
      }
    },
  },
  plugins: [],
}
