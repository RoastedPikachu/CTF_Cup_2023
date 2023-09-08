import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'mlarge': {'max': '480px'},
        'mmedium': {'max': '380px'},
        'msmall': {'max': '320px'},
        'desklarge': {'raw': '(min-height: 1440px) and (min-width: 2560px)'},
        'deskmedium': {'raw': '(min-height: 1080px) and (min-width: 1920px)'}
      }
    }
  },
  plugins: []
}
export default config
