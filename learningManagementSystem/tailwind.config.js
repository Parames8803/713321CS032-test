/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      mini: { max: "400px" },
      mobile: { max: "700px" },
      tablet: { max: "1000px" },
      desktop: { max: "1440px" },
    },
  },
  plugins: [],
};
