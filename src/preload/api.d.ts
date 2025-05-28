export interface Api {
  ping: (data: string) => void
  pong: (fn: (data: string) => void) => void
}
