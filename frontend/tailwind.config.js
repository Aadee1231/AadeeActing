/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
      fontFamily: {
        sans: ['Inter','system-ui','Segoe UI','Roboto','Helvetica','Arial','sans-serif'],
        display: ['Playfair Display','Georgia','serif'],
      },
      // 🔴 red brand palette
      colors: {
        brand: {
          50:'#fff1f1',100:'#ffe4e4',200:'#ffc8c8',300:'#ffa0a0',
          400:'#ff6b6b',500:'#ef4444',600:'#dc2626',700:'#b91c1c',
          800:'#991b1b',900:'#7f1d1d'
        }
      },
      boxShadow: { glow: '0 0 0 4px rgba(239,68,68,0.15)' },
      backgroundImage: {
        // used via class: bg-grid-radial
        'grid-radial':
          'radial-gradient(circle at 18% 22%, rgba(239,68,68,.16) 0 18%, transparent 18%), radial-gradient(circle at 82% 0%, rgba(255,255,255,.05) 0 18%, transparent 18%)',
      }
    },
  },
  plugins: [],
}
