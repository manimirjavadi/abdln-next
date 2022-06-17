/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["vazirmatn"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        abdlBlue: "#D98C00",
        abdlOrange: "#000957",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
