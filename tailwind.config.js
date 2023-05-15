/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'whitesmooth': '#eaeaea',
        'blacksmooth': '#242424',
      }
    },
  },
  plugins: [],
}

