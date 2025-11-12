import started from 'electron-squirrel-startup'
import { app, Menu } from 'electron'
import { electronApp } from '@electron-toolkit/utils'

function setupWindows() {
  // Handle Squirrel startup events on Windows (installer/update process)
  if (started) {
    app.quit()
  }

  Menu.setApplicationMenu(null)
  // Set app user model ID (required for Windows notifications and shortcuts).
  electronApp.setAppUserModelId('com.electron')
}

function setupMac() {}

function setupLinux() {
  Menu.setApplicationMenu(null)
}

export function setup() {
  if (process.platform === 'win32') {
    setupWindows()
  }
  if (process.platform === 'darwin') {
    setupMac()
  }
  if (process.platform === 'linux') {
    setupLinux()
  }
}
