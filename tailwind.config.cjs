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
        // => @media (min-width: 1536px) { ... }
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(min-aspect-ratio: 1/2)" },
      },
      colors: { primary: "#5ea1ff", secondary: "#ff725e" },
      boxShadow: { primaryDark: "4px 4px 2px 0px rgba(256,256,256,0.15)" },
      dropShadow: {
        neonPurple: [
          "0px 0px 4px rgba( 255, 255, 255,1)",
          "0px 0px 8px rgba( 188, 19, 254,0.7)",
          "0px 0px 16px rgba( 188, 19, 254,1)",
          "0px 0px 22px rgba( 188, 19, 254,0.8)",
        ],
      },
    },
    fontFamily: {
      cursiveCustom: ["Carter One", "cursive"],
      handWritten: ["Caveat", "cursive"],
      handWrittenT: ["Pacifico", "cursive"],
    },
  },
  plugins: [],
}
