import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// O repositório 1241182-AfonsoMachado.github.io publica na raiz do domínio.
export default defineConfig({
  plugins: [react()],
  base: "/",
})
