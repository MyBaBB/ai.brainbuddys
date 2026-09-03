/** @type {import('tailwindcss').Config} */
export default {
 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


 






  theme: {
    extend: {
      
  fontFamily: {
'Itim-Regular': ['Itim-Regular, cursive'],
'Sansita-Regular': ['Sansita-Regular', 'sans-serif'],
},

  screens: {
    'xxs': '320px',
    'xs': '420px',
    'sm': '460px',
    'md': '685px',
    'lg': '1024px',
    'xl': '1280px',
    'xxl': '1480px',
  },
 
  },
  
  plugins: [],

}
};