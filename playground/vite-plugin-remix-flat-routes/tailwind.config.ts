import { type Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
} as Config
