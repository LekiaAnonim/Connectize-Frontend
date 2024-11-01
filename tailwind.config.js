/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: "1rem",
      center: true,
    },
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        dark: "#242424",
        gold: " #f1c644",
        custom_grey: " #828282",
        light_grey: " #e5e5e5",
        mid_grey: "#373737",
      },
    },
  },
  plugins: [],
};
