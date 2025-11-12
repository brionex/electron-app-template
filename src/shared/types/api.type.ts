import { API } from './../../main/lib/api.ts'

// Representa la API disponible en el proceso principal
export type MainAPI = typeof API

// Manejador genérico en el proceso main que recibe peticiones del renderer
export type MainRequestHandler<Event> = (
  event: Event,
  request: {
    method: keyof MainAPI
    payload: Parameters<MainAPI[keyof MainAPI]>[0]
  }
) => void

// Función en el renderer para invocar métodos del proceso principal
export type InvokeMainMethod = <K extends keyof MainAPI>(
  method: K,
  payload: Parameters<MainAPI[K]>[0] | null
) => Promise<ReturnType<MainAPI[K]>>

// Estructura estándar de respuesta para llamadas IPC
export type IPCResponse<T = unknown> =
  | {
      ok: true
      data: T
    }
  | {
      ok: false
      error: {
        message: string
        code?: number
      }
    }
