/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#b2572b'
      },
      fontFamily: {
        'quicksand': ['QuickSand', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('./tea.jpg')"
      }
    },
    screens: {
      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
  }
  },
  plugins: [],
}