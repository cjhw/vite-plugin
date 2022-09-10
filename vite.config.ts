import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import virtual from './plugins/virtual-module'
import svgr from './plugins/svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), virtual(), svgr({ defaultExport: 'url' })],
})
