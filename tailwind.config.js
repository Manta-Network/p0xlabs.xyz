const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      black1: '#0D0D0D',
      black2: '#2C363F',
      black3: '#555D63',
      blue: '#2E74FF',
      blue1: '#2E74FFCC',
      gray: '#F9F8F4',
      gray2: '#565E65CC',
      gray3: '#808080',
      yellow: '#FDDE17',
    },
    fontFamily: {
      sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
      inter: ['Inter', ...defaultTheme.fontFamily.sans],
      mono: ['Roboto Mono', ...defaultTheme.fontFamily.sans],
      manrope: ['Manrope', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      mb: { min: '0px', max: '1024px' },
      pc: { min: '1025px' },
    },
    extend: {
      scale: {
        83: '0.83',
        27: '0.27',
      },
    },
  },
};
