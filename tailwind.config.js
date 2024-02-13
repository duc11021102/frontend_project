/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      body: [
        'Roboto Slab'
      ],
    }
  },
};
// eslint-disable-next-line no-undef
export const plugins = [require('flowbite/plugin')];