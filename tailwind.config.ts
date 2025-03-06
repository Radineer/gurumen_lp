import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-terracotta': '#E67E5A',
        'brand-olive': '#7C8B6F',
        'brand-orange': '#FF6B6B',
        'brand-yellow': '#FFB84D',
        'brand-light': '#F5F5F5',
        'brand-gray': '#666666',
        'brand-dark': '#333333',
        'white': '#FFFFFF',
        'gray': {
          300: '#D1D5DB',
          700: '#374151',
        },
        'red': {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)'],
        heading: ['var(--font-noto-sans)'],
      },
      spacing: {
        'section': '4rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}
export default config 