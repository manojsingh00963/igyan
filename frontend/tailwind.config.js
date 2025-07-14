/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4f46e5',
          dark: '#a5b4fc',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

