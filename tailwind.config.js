/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '420px',       // Extra small screens
        'custom-md': '850px', // Your own custom size
        'custom-lg': '1023px' // Your own custom size
      },
    },
  },
  plugins: [],
};
