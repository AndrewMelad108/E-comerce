/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        "2-auto": "repeat(2, minmax(0, auto))",
        "3-auto": "repeat(3, minmax(0, auto))",
      },
      backgroundImage: {
        // "home-page-image": "url('assets/pexels-annam-w-1057858.jpg')",
        // "about-page-image": "url('assets/about-image.jpg')",
      },
      colors: {
        "black-color": "rgba(2,2,2,0.4)",
        "head-color": "#ecf3fc",
        "blue-color": "#183661",
      },

      animation: {
        "up-down": "bounce 1s ease-in-out ",
      },
    },
  },
  plugins: [],
};
