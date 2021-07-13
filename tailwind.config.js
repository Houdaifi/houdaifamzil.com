module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'fakhti' : '#dd6e42',
        'turquoise': '#119da4'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
