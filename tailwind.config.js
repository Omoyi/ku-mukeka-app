/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  prtsesets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
      sankofa: ["sankofa"],
      rethink: ["rethink"],
      },
      colors: {
        primaryBlue: "#2140CD",
        primaryPurple: "#5036D2",
        secondaryPurple: "#7838D9",
      },
    },
  },
  plugins: [],
}
