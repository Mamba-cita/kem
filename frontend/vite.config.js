import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     // open: true,
//     proxy: {
//       '/api': {
//         target: 'http://localhost:8001',
//         changeOrigin: true,
//       },
//     },
//   }
// })



//production


// https://vitejs.prod/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'https://t-truck.onrender.com',
        changeOrigin: true,
      },
    },
  }
})