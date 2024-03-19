/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./index.html",
    // "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge:[
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ]
}

