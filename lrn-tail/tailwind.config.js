/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brownRang:"#493628",
        creamPie:"#E4E0E1"
      }
    },
  },
  plugins: [],
}

