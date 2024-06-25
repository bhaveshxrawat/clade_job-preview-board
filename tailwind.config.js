/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#DC4A2D',
        'grey': '#6E6D6D'
      },
    },
    screens: {
      'xl': { 'max': '1150px' },
      'lg': { 'max': '800px' }
    }
  },
  plugins: [],
}