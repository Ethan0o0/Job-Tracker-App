import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/jobs' : {
        target: 'http://localhost:5020',
        rewrite: path => path.replace(/^\/jobs/, '/jobs')
      },
      '/signup' : 'http://localhost:5020',
      '/login' : 'http://localhost:5020',
      '/logout' : 'http://localhost:5020',
      '/me' : 'http://localhost:5020'
    }
  }
})
