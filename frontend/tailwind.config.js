/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily :{
        happy: ['"Happy Monkey"', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        inconsolata: ['Inconsolata', 'monospace'],
      },
      keyframes: {
        'loading-rotate': {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '20%': { transform: 'scale(1) rotate(72deg)' },
          '40%': { transform: 'scale(0.5) rotate(144deg)' },
          '60%': { transform: 'scale(0.5) rotate(216deg)' },
          '80%': { transform: 'scale(1) rotate(288deg)' },
          '100%': { transform: 'scale(1) rotate(360deg)' },
        },
      },
      animation: {
        'loading-rotate': 'loading-rotate 3s linear infinite',
      },

    },
  },
  plugins: [],
}

