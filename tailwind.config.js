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
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
}
