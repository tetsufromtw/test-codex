import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#0075BB',
          550: '#0085D5',
          500: '#3399FF',
          300: '#99CCFF',
          200: '#CCE5FF',
          100: '#E5F2FF',
          50: '#FAFCFF',
        },
        red: {
          600: '#CC010D',
          550: '#E5010F',
          500: '#FF1A1A',
          300: '#FF6666',
          200: '#FF9999',
          100: '#FFD6D6',
          50: '#FFF5F5',
        },
      },
    },
  },
  plugins: [],
}

export default config
