/** @type {import('tailwindcss').Config} */
export default {
content: [
'./index.html',
'./src/**/*.{js,jsx,ts,tsx}',
],
theme: {
extend: {
container: { center: true, padding: '1rem' },
fontFamily: {
sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
display: ['Playfair Display', 'Georgia', 'serif']
},
colors: {
brand: {
50: '#f5f7ff',
100: '#ebefff',
200: '#cfd8ff',
300: '#aab9ff',
400: '#7d8bff',
500: '#5e6af7',
600: '#4a52d6',
700: '#3c41a8',
800: '#333887',
900: '#2d316f',
}
},
boxShadow: {
glow: '0 0 0 4px rgba(94,106,247,0.12)',
},
backgroundImage: {
'grid-radial': 'radial-gradient(circle at 20% 20%, rgba(94,106,247,.15) 0 15%, transparent 15%), radial-gradient(circle at 80% 0%, rgba(94,106,247,.1) 0 15%, transparent 15%)',
}
},
},
plugins: [],
}