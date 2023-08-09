import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      principal: {
        300: '#00B37E',
        500: '#00875F'
      },
      base: {
        100: '#FFF',
        200: '#E1E1E6',
        300: '#C4C4CC',
        600: '#202024',
        900: '#121214'
      }
    }
  },
}

export default config
