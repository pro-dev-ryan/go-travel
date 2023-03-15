/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#056499",
        secondary: "#3A3A3A",
        accent: "#3282AD",
        neutral: "#5A5A5A",
        light: "#ffffff",
        blue: "#D2F4FF",
        contact: "#42A7C3",
      },
      fontFamily: {
        headline: ["var--(font-headline)"],
        linkline: ["var--(font-linkline)"],
        textline: ["var--(font-regular)"],
      },
    },
  },
  plugins: [],
};
