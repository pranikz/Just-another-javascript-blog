module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "offset-black": "2px 2px black",
        "offset-black-big": "6px 6px black",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
