/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

import withMT from '@material-tailwind/react/utils/withMT';

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto'],
    },
    colors: {},
    extend: {},
  },
  plugins: [],
});
