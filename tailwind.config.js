/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        // primary: "#050816",
        // secondary: "#aaa6c3",
        // tertiary: "#151030",
        // "black-100": "#100d25",
        "black-100": "#450a0a",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        // card: "0px 35px 120px -15px #211e35",
        card: "0px 35px 120px -15px #b91c1c",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};