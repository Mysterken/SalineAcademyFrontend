import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as process from "process";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: +process.env.NODE_PORT,
  },
  plugins: [react()],
})
