/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.125rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
  },
  plugins: [],
};
