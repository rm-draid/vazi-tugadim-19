/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      screens: {
        planshet: "771px",
        notbuk: "1203px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
        screens: {
          DEFAULT: "100%",
          planshet: "680px",
          notbuk: "1170px",
        },
      },
      colors: {
        primary: "#2D2D2D",
        "primary-light": "#fff",
        secondary: "#009379",
      },
      boxShadow: {
        "custom-shadow": "34.85px 29.63px 48.34px 0px #3366ff0d",
      },
    },
  },
  plugins: [],
};
