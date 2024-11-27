import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { remixFlatRoutes } from 'vite-plugin-remix-flat-routes'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    remixFlatRoutes({
      flatRoutesOptions: {
        ignoredRouteFiles: ['**/components/**', '**/hooks/**', '**/contexts/**'],
      },
    }),
  ],
})
