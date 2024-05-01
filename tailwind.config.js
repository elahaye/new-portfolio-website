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
    },
  },
  plugins: [],
};
