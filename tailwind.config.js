/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Overpass", "sans-serif"],
      },
      textColor: (theme) => ({
        ...theme("colors"),

        primary: "#3172eb",

        secondary: "#8f94a2",

        terceary: "hsl(216, 12%, 54%)",

        cuarto: "#1b212d",

        quinto: "#151c2e",
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),

        primary: "#151c2e",

        secondary: "#212a46",

        terceary: "#3477f5",

        cuarto: "#8f94a2",

        quinto: "rgba(20,21,25,255)",
      }),
    },
  },
  plugins: [],
};
