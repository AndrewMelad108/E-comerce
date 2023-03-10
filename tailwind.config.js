/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        // "home-page-image": "url('assets/pexels-annam-w-1057858.jpg')",
        // "about-page-image": "url('assets/about-image.jpg')",
      },
      colors: {
        "black-color": "rgba(2,2,2,0.4)",
      },

      animation: {
        "up-down": "bounce 1s ease-in-out ",
      },
    },
  },
  plugins: [],
};
