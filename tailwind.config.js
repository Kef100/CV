/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#20202a',
          300: '#2b2b36',
          400: '#242430',
          500: '#20202a',
          600: '#1e1e28',
        },
      },
      fontFamily: {
        roboto: ['Roboto-slab', 'sans-serif'],
      },
      backgroundImage: {
        banner: "url('../public/banner.jpg')",
      },
      keyframes: {
        scroll: {
          '0%': {
            opacity: 1,
            top: '0.5rem',
          },
          '30%': {
            opacity: 0,
            top: '1rem',
          },
          '35%': {
            opacity: 0,
            top: '0.5rem',
          },
          '40%, 100%': {
            opacity: 1,
            top: '0.5rem',
          },
        },
      },
      animation: {
        scroll: 'scroll 3s ease infinite',
      },
    },
  },
  plugins: [],
};
