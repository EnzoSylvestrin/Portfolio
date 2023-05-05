/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "lg": 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
      },
      colors: {
        "purple-300": '#AF40FF',
        "blue-500": '#5B42F3',
        "cyan-400": '#00DDEB',
      },
      fontFamily: {
        work: 'Work Sans, sans-serif'
      },
      screens: {
        xs: '370px',
        mdlg: '870px'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0.1' },
          '100%': { opacity: '1.0' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease',
      },
      fontSize: {
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        xxl: 28,
        '2xl': '2rem',
        xlg: '2.5rem',
      },
    },
  },
  darkMode: 'class',
 
  plugins: [],
}
