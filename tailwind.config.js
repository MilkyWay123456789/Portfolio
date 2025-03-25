/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        code: ["Fira Code", "monospace"],
      },
      colors: {
        neonBlue: "#00eaff",
        darkBg: "#0a0f1f",
      },
    },
  },
  plugins: [],
};
