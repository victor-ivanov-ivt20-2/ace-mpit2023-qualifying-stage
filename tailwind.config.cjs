/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#317DFC",
        white: "#FFFFFF",
        black: "#000000",
        green: "#22C55E",
        gray: "#F1F5F9",
        dark: "#1E293B",
        grayer: "rgba(30, 41, 59, 0.5)"
      },
    },
  },
  plugins: [],
};

module.exports = config;
