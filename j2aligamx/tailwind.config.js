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
        danger: "#f20f0f",
        blueMenu: "#010d5e",
      },
      container: {
        center: true,
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  plugins: [],
};
