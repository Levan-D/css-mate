/** @format */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "540px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        "8xl": "2560px",
        // => @media (min-width: 1536px) { ... }
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(min-aspect-ratio: 1/2)" },
      },
      colors: {
        primary: "#5ea1ff",
        secondary: { 300: "#ff725e", 200: "#f78777" },
        darkJungle: {
          100: "#71757b",
          200: "#626b76",
          300: "#556070",
          400: "#495668",
          500: "#3d4c60",
          600: "#324257",
          700: "#28384d",
          800: "#1f2e42",
          900: "#172437",
        },
      },
      boxShadow: {
        primaryDark: "2px 3px 2px 0px rgba(255,255,255,0.30)",
        primaryBr: "2px 3px 2px 0px rgba(0,0,0,0.30)",
      },
    },
    fontFamily: {
      cursiveCustom: ["Carter One", "cursive"],
      handWritten: ["Caveat", "cursive"],
      handWrittenT: ["Pacifico", "cursive"],
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
}
