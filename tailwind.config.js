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
        "offset-white": "2px 2px white",
        "offset-black-big": "6px 6px black",
      },
      colors: {
        "js-yellow": "#eab308",
        "js-yellow-hover": "#d2a20e",
        "react-blue": "#61dafb",
        "dsa-orange": "#ff8e3a",
        "header": "#316B83",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
