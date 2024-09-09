/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./public/**/*.js", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary_color: "#111827",
        secondary_color: "#08201d",
      },
      backgroundColor: {
        primary_color: "#111827",
        secondary_color: "#08201d",
      },
      backgroundImage: {
        background_gradient:
          "linear-gradient(to bottom, #111827, #081b27, #031d25, #031f22, #08201d)",
      },
    },
  },
  plugins: [],
};
