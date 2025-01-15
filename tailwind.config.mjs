/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-light': '#74ad69',
        'main-light-variant': '#244c6c',
        main: '#074161',
        'main-bluish': '#05446c',
        'main-dark': '#0a3455',
        'main-dark-variant': '#0b374a',
        'main-accent': '#05446c',
        'main-variant': '#244c6c'
      }
    }
  },
  plugins: []
}
