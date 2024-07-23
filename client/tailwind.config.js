/** @type {import('tailwindcss').Config} */
 
 
 export default  ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('bg.jpg')",
        'bg':"url('formBackground.jpg')"
      },
      screens:{
        "phone":"400px"
      }
    },
  },
  plugins: [],
})

