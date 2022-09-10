import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import virtual from './plugins/virtual-module'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), virtual()],
})
