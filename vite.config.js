import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'


dotenv.config()

export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT)
  },
  define:{
    'process.env.PORT':`${process.env.PORT}`
  }
})
