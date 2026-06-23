/* tailwind.config.js */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        'primary-light': '#1e293b',
        secondary: '#1e293b',
        accent: '#3b82f6',
        'accent-light': '#60a5fa',
        success: '#10b981',
        warning: '#f59e0b',
        cta: '#f97316',
        'cta-hover': '#ea580c',
        light: '#f8fafc',
        dark: '#0f172a',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-poppins)'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}