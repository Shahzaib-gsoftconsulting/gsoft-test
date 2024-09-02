import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      include: ['src/**/*.{ts,tsx}'], // Specify the files to lint
      emitWarning: true,
      emitError: true,
      failOnError: true, // Fail the build on error
    }),
  ],
  server: {
    open: true,
    port: 3000,
  }
})
