/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg1':'#00FFCA',
        'bg2':'#05BFDB',
        'text1':'#0A4D68',
        'text2':'#088395', 
      }
    },
  },
  plugins: [],
}

