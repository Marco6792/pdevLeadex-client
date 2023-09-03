/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "from": "rgba(241, 196, 15, 1) 20%",
        "to": "rgba(243, 172, 18, 1) 100%"
      },
      screens:{
        "xms": "450px",
        "xxms": "200px"
      }
    },
  },
  plugins: [],
}