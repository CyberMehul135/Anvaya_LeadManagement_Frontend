/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          primary: "#F8FAFC",
          secondary: "#ffffff",
          blue: "#2463EB",
          bluehover: "#527fe0",
          darkblue: "#0F1729",
          green: "#16A249",
          red: "#EF4343",
          yellow: "#F59F0A",
          gray: "#F1F5F9",
        },
        border: {
          default: "#E1E7EF",
          darkblue: "#1D283A",
        },
        text: {
          primary: "#000000",
          secondary: "#65758B",
          gray: "#B2B6BC",
          white: "#ffffff",
          blue: "#2463EB",
        },
        status: {
          blue: "#DBEAFE",
          bluetext: "#1E4DC3",
          purple: "#F3E8FF",
          purpletext: "#6B21BB",
          green100: "#DCFCE7",
          green100text: "#166556",
          green200: "#D1FAE5",
          green200text: "#065F60",
          yellow: "#FEF9C3",
          yellowtext: "#954D0E",
          orange: "#FFEDD5",
          orangetext: "#A73412",
        },
      },
    },
  },
  plugins: [],
};
