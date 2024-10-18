//** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
      },
      backgroundColor: {
        "dark-mode": "black",
      },
      textColor: {
        "dark-mode": "white",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
