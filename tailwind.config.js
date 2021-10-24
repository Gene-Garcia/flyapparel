module.exports = {
  purge: ["./src/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  varians: { extend: { scale: ["hover"], transform: ["hover"] } },
  plugins: [],
};
