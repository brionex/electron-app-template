/// <reference types="vite/client" />

import type { Api } from './../shared/api'

declare global {
  interface Window {
    api: Api
  }
}
