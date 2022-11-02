/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: "#264C4B",
        button: "#3452eb",
        button2: "#0a22d1",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
