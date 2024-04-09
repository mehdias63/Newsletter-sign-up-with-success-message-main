/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      robo: ["Roboto"],
      
    },
    extend: {
      colors: {
        "dark-blue": "#36384D",
        "light-red": "#FF6155",
        "dark-gray": "#242742",
        "orange": "#FF6A3A",
        "pink": "#FF527B",
        "light-pink": "#ffe7e6",
      },
    },
  },
  plugins: [],
};

