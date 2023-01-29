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
      '2xl': 32
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
  plugins: [],
}
