import type { InvokeMainMethod } from '@shared/types/api.type.ts'
import { contextBridge, ipcRenderer } from 'electron'

const api: InvokeMainMethod = (method, payload) =>
  ipcRenderer.invoke('api', { method, payload })

contextBridge.exposeInMainWorld('invoke', {
  api
})
