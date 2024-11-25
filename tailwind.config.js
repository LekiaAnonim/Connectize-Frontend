/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      padding: "1.5rem",
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
        gold: " #F1C644",
        custom_yellow: "#FFFAB7",
        custom_grey: " #828282",
        light_grey: " #e5e5e5",
        mid_grey: "#373737",
        custom_blue: "#262626",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
