import { spawn } from 'node:child_process'
import { join } from 'node:path'
import { existsSync, readFileSync } from 'node:fs'

const __dirname = import.meta.dirname

function runApp() {
  const outPath = join(__dirname, '../../out')

  // Verify output folder
  if (!existsSync(outPath)) {
    console.error('Output directory not found. Run "npm run package".\n')
    return
  }

  const appName = JSON.parse(
    readFileSync(join(process.cwd(), 'package.json'), 'utf-8')
  ).productName

  const exePath = join(outPath, `${appName}-win32-x64`, `${appName}.exe`)

  if (!existsSync(exePath)) {
    console.error('Executable not found. Run "npm run package".\n')
    return
  }

  // Spawn child process
  const child = spawn(exePath, [], {
    stdio: ['ignore', 'pipe', 'pipe']
  })

  // Forward app logs
  child.stdout.on('data', (data) => process.stdout.write(data))
  child.stderr.on('data', (data) => process.stderr.write(data))

  console.log(`App running`)
  console.log(`PID: ${child.pid}`)
  console.log(`Path: ${exePath}\n`)
  console.log('--- App Logs ---')

  // Process exit events
  child.on('exit', (code, signal) => {
    console.log(`\n[Child exit] code=${code} signal=${signal}`)
  })

  child.on('close', () => {
    console.log('[Child closed streams]')
  })

  // Graceful shutdown
  function cleanup() {
    if (child && !child.killed) {
      // Intentar cierre suave
      try {
        child.kill('SIGTERM')
      } catch {}

      // Forzar cierre después de 500ms si sigue vivo
      setTimeout(() => {
        try {
          if (!child.killed) child.kill('SIGKILL')
        } catch {}
      }, 500)
    }
  }

  process.on('SIGINT', cleanup)
  process.on('exit', cleanup)
  process.on('SIGTERM', cleanup)
}

runApp()
