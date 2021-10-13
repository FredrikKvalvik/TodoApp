module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#9dcee2",
          DEFAULT: "#4091c9",
          dark: "#1368aa",
        },
        yellow: {
          light: "#ffd500",
          DEFAULT: "#fdc500",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
