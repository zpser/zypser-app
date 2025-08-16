/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}', './Screens/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primaryButton: '#7D4DEE',
        secondaryButton: '#E7E9EB',
        allStone: '#F8F9FA',
      },
    },
  },
  plugins: [],
};
