import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-neutral': {
          '200': '#E1E1E6',
          '500': '#C4C4CC',
          '700': '#202024',
          '950': '#121214',
        },
        'custom-green': {
          '400': '#00B37E',
          '600': '#00875F',
        },
        white: '#FFF',
      },
      backgroundImage: {
        'product-texture': 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
      },
    },
  },
}

export default config
