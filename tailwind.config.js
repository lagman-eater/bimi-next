/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'pt-serif': ['PT Serif', 'serif'],
        'pt-sans': ['PT Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'bimi-blue': '#1C41B0',
        'bimi-dark-blue': '#0F2149',
        'bimi-hover-blue': '#2857FE',
      },
      fontSize: {
        '1.2vw': '1.2vw',
        '3.5vw': '3.5vw',
        '1.3vw': '1.3vw',
        '2.5vw': '2.5vw',
      },
      boxShadow: {
        header: '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      borderWidth: {
        20: '20px',
      },
      borderRadius: {
        'b-r': '0 0 25px 0',
      },
    },
  },
  plugins: [],
};