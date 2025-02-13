/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-light': '#5f9edb',
        'main-light-variant': '#3578a0',
        main: '#0369a1',
        'main-bluish': '#035a99',
        'main-dark': '#084b8a',
        'main-darker': '#063b6e',
        'main-darkest': '#031c35',
        'main-dark-variant': '#094a7a',
        'main-accent': '#035a99',
        'main-variant': '#3578a0'
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
  plugins: [require('tailwindcss-animate')]
}
