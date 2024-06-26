import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react()
  ],
  server: {
    watch: {
      ignored: ['**/node_modules/**', '**/dist/**']
    }
  },
  resolve: {
    alias: [
      {
        find: /^src(.+)/,
        replacement: path.join(process.cwd(), 'src/$1'),
      },
    ],
  },
})
