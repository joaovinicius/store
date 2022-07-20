import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  root: './apps/client',
  build: {
    // generate manifest.json in outDir
    manifest: true,
  },
  server: {
    port: 3000,
  },
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    quasar({
      sassVariables: 'src/Infrastructure/Quasar/quasar-variables.sass'
    })

  ]
})