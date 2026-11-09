import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// O repositório AfonsoMachado1892.github.io publica na raiz do domínio.
export default defineConfig({
  plugins: [react()],
  base: "/",
})
