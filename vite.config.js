import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import * as process from "process";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: +process.env.NODE_PORT || 3000,
  },
  plugins: [react(), ssr()],
})
