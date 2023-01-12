/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "sm": "0.8rem",
      "base": "1rem",
      "xl": "1.5rem",
      "2xl": "1.75rem",
      "3xl": "2rem",
      "4xl": "3rem",
      "5xl": "4.5rem",
    },
  },
  plugins: [],
};
