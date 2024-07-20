/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'phone':"450px"
      },
      backgroundImage: {
        'bg1': "url('/public/winter.jpg')",
        'bg2':"url('handbag.jpg')"
      },
    },
  },
  plugins: [],
}

