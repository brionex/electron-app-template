import { app, BrowserWindow } from 'electron'
import { optimizer } from '@electron-toolkit/utils'
import { setup } from '@/config/setup.ts'
import { createWindow } from '@/config/window.ts'
import { ipcApi } from '@/ipc/api.ipc.ts'

setup()

// Called when Electron is ready to create browser windows.
app.whenReady().then(() => {
  // Enable F12 for DevTools in dev, disable Ctrl+R in production.
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // On macOS, recreate a window when the Dock icon is clicked and no windows are open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  ipcApi()
  createWindow()
})
