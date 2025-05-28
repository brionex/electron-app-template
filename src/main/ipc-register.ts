import { ipcMain } from 'electron'

export function ipcRegister() {
  ipcMain.on('ping', (ev, data) => {
    console.log(data)
    ev.reply('pong', 'pong desde el main')
  })
}
