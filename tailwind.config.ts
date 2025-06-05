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
          600: 'oklch(55% 0.23 233)',
          550: 'oklch(60% 0.23 235)',
          500: 'oklch(65% 0.23 238)',
          300: 'oklch(80% 0.19 235)',
          200: 'oklch(85% 0.15 235)',
          100: 'oklch(90% 0.10 235)',
          50: 'oklch(98% 0.02 235)',
        },
        red: {
          600: 'oklch(55% 0.27 27)',
          550: 'oklch(60% 0.28 27)',
          500: 'oklch(65% 0.29 27)',
          300: 'oklch(80% 0.22 25)',
          200: 'oklch(85% 0.16 25)',
          100: 'oklch(93% 0.08 25)',
          50: 'oklch(98% 0.03 25)',
        },
      },
    },
  },
  plugins: [],
}

export default config
