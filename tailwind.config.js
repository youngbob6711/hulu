/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkmode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}
