/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pop: "Poppins"
      },
      colors: {
        blue1: "#2E3192",
        blue2: "#0D99FF"
      }
    },
  },
  plugins: [],
}

