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
          500: '#009AFF',
          300: '#00CEFF',
          200: '#56DCFF',
          100: '#9AE9FF',
          50: '#ECFBFF',
        },
        red: {
          600: '#CC010D',
          550: '#E5010F',
          500: '#FF0000',
          300: '#FF7772',
          200: '#FFA198',
          100: '#FFD4CD',
          50: '#FFF1EE',
        },
      },
    },
  },
  plugins: [],
}

export default config
