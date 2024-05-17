import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: 8080
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  }
})
