/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    theme: {
      textShadow: {
        default: "2px 2px 0 #000",
        md: "0 2px 2px #000",
        h2: "0 0 3px #FF0000, 0 0 5px #0000FF",
        h1: "3px 3px 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)",
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
    extend: {},
  },
  plugins: [],
};
