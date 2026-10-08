// Preview launcher: membaca APP_PORT dari .env lalu menjalankan `nuxt preview`.
import { spawn } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

function readEnv(file) {
  const env = {}
  if (!existsSync(file)) return env
  for (const line of readFileSync(file, 'utf8').split(/\r?\n/)) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*?)\s*$/)
    if (match && !line.trim().startsWith('#')) env[match[1]] = match[2].replace(/^['"]|['"]$/g, '')
  }
  return env
}

const env = { ...readEnv(resolve(process.cwd(), '.env')), ...process.env }
const port = env.APP_PORT || '3000'

console.log(`Delcom Cash Flow preview berjalan di http://localhost:${port}`)
const child = spawn('bunx', ['--bun', 'nuxt', 'preview', '--port', port, '--host', '0.0.0.0'], {
  stdio: 'inherit',
  env: { ...env, APP_PORT: port },
  shell: process.platform === 'win32',
})
child.on('exit', (code) => process.exit(code ?? 0))
