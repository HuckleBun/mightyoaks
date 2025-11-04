import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        oak: {
          50: '#faf8f3',
          100: '#f5f0e6',
          200: '#e8dcc4',
          300: '#d4bc91',
          400: '#c09d5e',
          500: '#a67c3c',
          600: '#8b6530',
          700: '#6f4e27',
          800: '#5c4024',
          900: '#4d3520',
        }
      },
    },
  },
  plugins: [],
}
export default config

