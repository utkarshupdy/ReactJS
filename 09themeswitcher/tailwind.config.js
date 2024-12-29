/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class", // this enables to change html on the basis os classes........ without this ... project doesnot work i,e, theme doesn't change
  theme: {
    extend: {},
  },
  plugins: [],
}