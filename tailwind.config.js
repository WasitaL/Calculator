/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontSize:{
        xs:'12px',
        sm:'14px',
        md:'16px',
        lg:'18px',
        xl:'20px',
        '2xl':'22px',
        '3xl':"24px"
      },
    },
  },
  plugins: [],
}

