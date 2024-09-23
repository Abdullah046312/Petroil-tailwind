/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     maxWidth:{
      container:"1140px",
     },
     backgroundColor:{
      hbg:"#282828",
     },
     fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
     
    },
    
    backgroundImage: {
      'banner': "url('./assets/images1.png')",
      'service': "url('./assets/images6.png')",
      'service1': "url('./assets/images7.png')",
      'service2': "url('./assets/images8.png')",
      'Learn': "url('./assets/images9.png')",
      'Read1': "url('./assets/images11.png')",
      'Read2': "url('./assets/images12.png')",
      'Read3': "url('./assets/images13.png')",
    },
    },
  },
  plugins: [],
}