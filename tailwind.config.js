module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Dancing':['Dancing'],
        'Limelight':['Limelight'],
        'Lobster':['Lobster'],
        'Noto':['Noto'],
        'Roboto':['Roboto'],
        'ZCOOL':['ZCOOL']


       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
