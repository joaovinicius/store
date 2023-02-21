import { defineConfig } from 'vite'
import dotenv from 'dotenv';
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  root: './apps/web',
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: [
      {
        find: 'src',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: 'components',
        replacement: path.resolve(__dirname, 'src/Infrastructure/Vue/Quasar/components')
      },
    ]
  },
  build: {
    // generate manifest.json in outDir
    manifest: true
  },
  server: {
    port: 3000
  },
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    quasar({
      sassVariables: 'src/Infrastructure/Vue/Quasar/quasar-variables.sass'
    })
  ]
})
