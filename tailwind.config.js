/** @type {import('tailwindcss').Config} */

export default {
    darkMode: ['class'],
    content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		colors: {
  			'main-light': '#74ad69',
  			'main-light-variant': '#244c6c',
  			main: '#074161',
  			'main-bluish': '#05446c',
  			'main-dark': '#0a3455',
  			'main-darker': '#072740',
  			'main-dark-variant': '#0b374a',
  			'main-accent': '#05446c',
  			'main-variant': '#244c6c'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
}
