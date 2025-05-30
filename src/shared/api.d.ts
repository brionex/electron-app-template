export type Api = {
  ping: (data: string) => void
  pong: (fn: (data: string) => void) => void
}
