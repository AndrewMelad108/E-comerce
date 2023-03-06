/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "login-page-image": "url('assets/pexels-todd-trapani-1777832.jpg')",
      },
      colors: {
        "black-color": "rgba(2,2,2,0.4)",
      },
      // keyframes: {
      //   "up-down": {
      //     "0%": { transform: "translateY(-25%)" },

      //     "50%": { transform: "translateY(0)" },
      //     " 75%": { transform: "translateY(-25%)" },
      //     " 100%": { transform: "translateY(0)" },
      //   },
      // },
      animation: {
        "up-down": "bounce 1s ease-in-out ",
      },
    },
  },
  plugins: [],
};
