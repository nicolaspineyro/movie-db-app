module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        red: {
          default: "#FF0000",
          bold: "#950101",
          bolder: "#3D0000",
        },
        gray: {
          light: "#E5E5E5",
          medium: "#7F7F7F",
          dark: "#333333",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
