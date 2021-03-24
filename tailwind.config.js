module.exports = {
  purge: ['./*.html', './**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
