# Proxy
How to create proxy? Proxies are commonly used in web development to handle cross-origin requests, particularly in development environments where you might have separate backend and frontend servers running on different ports or domains. 

## When FrontEnd meets Backend !

''' import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [react()]
})
'''
