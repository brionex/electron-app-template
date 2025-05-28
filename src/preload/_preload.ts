import type { Api } from '@p/api'
import { contextBridge, ipcRenderer } from 'electron'

const api: Api = {
  // Recibe datos del renderer y los envía al main
  ping: (data: string) => {
    ipcRenderer.send('ping', data)
  },

  // Recibe datos del main y los envía al renderer
  pong: (fn: (data: string) => void) => {
    ipcRenderer.on('pong', (ev, data) => {
      fn(data)
    })
  }
}

contextBridge.exposeInMainWorld('api', api)
