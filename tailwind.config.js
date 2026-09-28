/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f5f0e8',
        ink: '#1d1a17',
        wood: '#9c6c3b',
        woodSoft: '#c48e5c',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 50px rgba(12,10,8,0.08)',
      },
    },
  },
  plugins: [],
}

