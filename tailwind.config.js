module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'fakhti' : '#dd6e42',
        'turquoise': '#119da4'
      },
      textOpacity: ['dark']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
