/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      xxl: 28,
      '2xl': '2rem',
      xlg: '2.5rem',
    },
    extend: {
      fontFamily: {
        work: 'Work Sans, sans-serif'
      }
    },
    breakpoints: {
      xs: '370px',
      sm: '500px',
      md: '768px',
      lg: '900px'
    }
  },
  darkMode: 'class',
  extend: {
    colors: {
      "purple-300": '#AF40FF',
      "blue-500": '#5B42F3',
      "cyan-400": '#00DDEB',
    }
  },
  plugins: [],
}
