/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: "#00e187",
        hAccent: "#33e8a0"
      }
    },
  },
  plugins: [],
}