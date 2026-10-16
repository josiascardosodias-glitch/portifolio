import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const requiredEnv = [
  'VITE_GITHUB_URL',
  'VITE_LINKEDIN_URL',
  'VITE_INSTAGRAM_URL',
  'VITE_CONTACT_EMAIL',
  'VITE_WHATSAPP_NUMBER',
]

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const missing = requiredEnv.filter((name) => !env[name])
  if (missing.length > 0) {
    throw new Error(`Variáveis de ambiente faltando no .env: ${missing.join(', ')}`)
  }

  return {
    plugins: [react(), tailwindcss()],
    server: {
      port: Number(env.PORT) || 5173,
    },
  }
})
