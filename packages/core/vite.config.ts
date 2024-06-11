import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'
import { dependencies } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['./lib', './src/vite-env.d.ts'], insertTypesEntry: true })
  ],
  css: {
    modules: {
      scopeBehaviour: 'local'
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/_mixin.scss";'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'lib')
    }
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, './lib/index.ts'),
      name: 'index',
      formats: ['es', 'umd'],
      fileName: 'index'
    },
    rollupOptions: {
      external: Object.keys(dependencies)
    }
  }
})
