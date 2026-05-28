
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Setting base to '/' ensures all your internal assets 
  // (CSS, JS, Images) are linked correctly from the root.
  base: '/',
})