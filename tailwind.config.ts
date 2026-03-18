import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{svelte,ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          50: '#fdf2f2',
          100: '#fde3e3',
          200: '#facaca',
          300: '#f5a6a6',
          400: '#ee7575',
          500: '#e34141',
          600: '#d02626',
          700: '#af1c1c',
          800: '#911b1b',
          900: '#781c1c',
          950: '#410a0a',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} satisfies Config;
