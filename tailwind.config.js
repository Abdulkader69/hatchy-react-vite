module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FFA600',
        siteBG: '#090D11',
        grayLight: '#A3A7A9',
        dark: '#10181E',
      },
      boxShadow: {
        'box-s-sml': '0px 0px 30px 5px rgb(0 0 0 / 50%)',
        'box-s-sml2': '0 6px 12px rgb(0 0 0 / 65%)',
      },
      transitionProperty: {
        'bg-transition': 'background-color 0.6s ease',
        'height-transition': 'max-height 0.8s ease',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
