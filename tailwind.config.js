/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Metrophobic", "serif"],
      },
      colors: {
        bg: "#f0e6e1b8",
      },
      screens: {
        ms: { max: "610px" },
        smTab: { min: "610px", max: "1000px" },
        smLab: { min: "1000px", max: "1250px" }
      },
    },
  },
  plugins: [],
};
