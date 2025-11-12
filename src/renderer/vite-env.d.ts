/// <reference types="vite/client" />

import type { InvokeMainMethod } from '@shared/types/api.type'

declare global {
  interface Window {
    invoke: {
      api: InvokeMainMethod
    }
  }
}
