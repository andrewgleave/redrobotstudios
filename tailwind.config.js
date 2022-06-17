/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro Text", "SF Pro Icons", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
