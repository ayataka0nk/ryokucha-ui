import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'
import { dependencies } from './package.json'

function addUseClient() {
  return {
    name: 'add-use-client',
    renderChunk(code: any) {
      return `'use client';\n${code}`
    }
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['./lib', './src/vite-env.d.ts'] })
    // addUseClient()
  ],
  css: {
    modules: {
      scopeBehaviour: 'local'
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
      entry: {
        globalStyle: path.resolve(__dirname, 'lib/globalStyle.ts'),
        AppBar: path.resolve(__dirname, 'lib/AppBar/index.tsx'),
        Button: path.resolve(__dirname, 'lib/Button/index.tsx'),
        Card: path.resolve(__dirname, 'lib/Card/index.tsx'),
        DatePicker: path.resolve(__dirname, 'lib/DatePicker/index.tsx'),
        Dialog: path.resolve(__dirname, 'lib/Dialog/index.tsx'),
        Icon: path.resolve(__dirname, 'lib/Icon/index.tsx'),
        IconButton: path.resolve(__dirname, 'lib/IconButton/index.tsx'),
        Layout: path.resolve(__dirname, 'lib/Layout/index.tsx'),
        List: path.resolve(__dirname, 'lib/List/index.tsx'),
        Navigation: path.resolve(__dirname, 'lib/Navigation/index.tsx'),
        Search: path.resolve(__dirname, 'lib/Search/index.tsx'),
        TextField: path.resolve(__dirname, 'lib/TextField/index.tsx'),
        TimePicker: path.resolve(__dirname, 'lib/TimePicker/index.tsx')
      },
      name: 'index',
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}/index.js`
    },
    rollupOptions: {
      output: {
        banner: (chunk) => {
          if (
            [
              'DatePicker',
              'Dialog',
              'Navigation',
              'Search',
              'TimePicker'
            ].includes(chunk.name)
          ) {
            return "'use client'"
          } else {
            return ''
          }
        }
      },
      external: Object.keys(dependencies)
    }
  }
})
