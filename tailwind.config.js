const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: "1.15rem",
      center: true,
    },
    extend: {
      screens: {
        xs: "480px",
        "2xl": "1400px",
      },
      colors: {
        background: "#F7F7F7",
        tabs: "#E1E1E1",
        dark: "#242424",
        gold: "#F1C644", // f1c644
        custom_yellow: "#FFFAB7",
        services_yellow: "#f0d77f",
        custom_grey: " #828282",
        light_grey: " #e5e5e5",
        mid_grey: "#373737",
        custom_blue: "#262626",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
