import { spawn } from 'node:child_process'
import { join } from 'node:path'
import { existsSync, readFileSync } from 'node:fs'

const __dirname = import.meta.dirname

function runApp() {
  const outPath = join(__dirname, '../../out')

  if (!existsSync(outPath)) {
    console.error('The output directory of the packaged app does not exist.')
    console.log('Run "npm run package" to package the app.\n')
    return
  }

  const appName = JSON.parse(
    readFileSync(join(process.cwd(), 'package.json'), 'utf-8')
  ).productName

  // Run the app on Windows
  if (process.platform === 'win32') {
    const exePath = join(outPath, `${appName}-win32-x64`, `${appName}.exe`)

    if (!existsSync(exePath)) {
      console.log('The application executable was not found.')
      console.log('Run "npm run package" to package the app.\n')
      return
    }

    spawn(exePath, [], {
      stdio: 'inherit'
    })
  }

  // Add other platforms here
}

runApp()
