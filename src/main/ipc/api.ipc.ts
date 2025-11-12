import type { MainRequestHandler } from '@shared/types/api.type.ts'
import { ipcMain, IpcMainInvokeEvent } from 'electron'
import { API } from '@/lib/api.ts'

const api: MainRequestHandler<IpcMainInvokeEvent> = (ev, request) => {
  // @ts-expect-error: TypeScript usa union type para validar los tipos de los parámetros.
  return API[request.method](request.payload)
}

export function ipcApi() {
  ipcMain.handle('api', api)
}
