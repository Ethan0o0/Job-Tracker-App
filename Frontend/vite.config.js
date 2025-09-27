import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/jobs' : {
        target: 'https://job-tracker-app-72g4.onrender.com',
        rewrite: path => path.replace(/^\/jobs/, '/jobs')
      },
      '/signup' : 'https://job-tracker-app-72g4.onrender.com',
      '/login' : {
        target: 'https://job-tracker-app-72g4.onrender.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/login/, '/login')
      },
      '/logout' : 'https://job-tracker-app-72g4.onrender.com',
      '/me' : 'https://job-tracker-app-72g4.onrender.com'
    }
  }
})
