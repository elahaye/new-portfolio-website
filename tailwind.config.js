/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      'light-green': '#e4fde1',
      'green': '#8acb88',
      'blue': '#648381',
      'light-grey': '#dedee0',
      'grey': '#4e4e57',
      'yellow': '#ffbf46',
    },
    screens: {
      'phone': '480px',
      'tablet': '768px',
      'large-tablet': '900px',
      'desktop': '1024px',
      'big-desktop': '1800px',
    },
    boxShadow: {
      'resume': '3px 3px 5px var(--green-color)',
      'navbar': '0 6px 7px -6px var(--blue-color)',
    },
    animation: {
      'rotate-square-1': 'counterClockwise 80s linear infinite',
      'rotate-square-2': 'clockwise 80s linear infinite',
    },
    keyframes: {
      counterClockwise: {
        '0%': {transform: 'rotate(360deg)'},
        '100%': {transform: 'rotate(0deg)'},
      },
      clockwise: {
        '0%': {transform: 'rotate(60deg)'},
        '100%': {transform: 'rotate(420deg)'},
      },
    },
  },
  plugins: [],
};
