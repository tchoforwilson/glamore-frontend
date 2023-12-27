/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,css,scss,sass,svg}"],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
        tablet: "540px",
        laptop: "1024px",
        desktop: "1280px",
        tv: "1980px",
      },
    },
  },
  plugins: [],
};
