/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  safelist: [
    { pattern: /^from-/ },
    { pattern: /^to-/ },
    { pattern: /^h-/ },
    { pattern: /^w-/ },
  ],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        accent: {
          DEFAULT: '#20202a',
          300: '#2b2b36',
          400: '#242430',
          500: '#20202a',
          600: '#1e1e28',
        },
        brown: {
          DEFAULT: '#996633',
          50: '#E0C2A3',
          100: '#DBB894',
          200: '#D1A375',
          300: '#C78F57',
          400: '#B87A3D',
          500: '#996633',
          600: '#6F4A25',
          700: '#452E17',
          800: '#1B1209',
          900: '#000000',
        },
      },
      fontFamily: {
        roboto: ['Roboto-slab', 'sans-serif'],
      },
      backgroundImage: {
        banner: "url('../public/banner.jpg')",
        landing: "url('../public/aleksandar-pasaric.jpg')",
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
        float: {
          '0%, 100%': {
            transform: 'translatey(0)',
          },
          '50%': {
            transform: 'translatey(-0.5rem)',
          },
        },
        fly: {
          '0%': {
            left: '100%',
          },
          '100%': {
            left: '-50%',
          },
        },
      },
      animation: {
        scroll: 'scroll 3s ease infinite',
        float: 'float 3s ease-in-out infinite',
        fly: 'fly 15s linear infinite',
        'fly-reverse': 'fly 15s linear reverse 5s infinite',
      },
    },
  },
  plugins: [],
};
