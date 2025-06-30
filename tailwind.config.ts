import type {Config} from 'tailwindcss'

const config: Config = {
  darkMode: 'selector',
  important: true,
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {},
}

export default config
