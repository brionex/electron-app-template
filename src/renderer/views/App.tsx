import { useEffect } from 'react'
import { alertTest, pingTest, asyncPingTest, logPlatform } from '@/services'
import { Button } from '@/components/Button'

export const App = () => {
  return (
    <main>
      <div className="fixed top-0 left-0 inset-0 z-0">
        <div className="size-52 bg-cyan-600 rounded-full blur-[150px]"></div>
        <div className="absolute right-0 bottom-0 size-52 bg-cyan-600 rounded-full blur-[150px]"></div>
      </div>

      <section className="relative grid place-content-center h-dvh text-center gap-10">
        <h1 className="text-4xl font-bold">Electron App</h1>
        <p className="text-lg">
          ElectronJs + Vite + Typescript + React + TailwindCSS
        </p>
        <div className="flex gap-4 justify-center">
          <Button fn={alertTest}>Alerta</Button>
          <Button fn={pingTest}>Ping</Button>
          <Button fn={asyncPingTest}>Async Ping</Button>
          <Button fn={logPlatform}>Log Platform</Button>
        </div>
      </section>
    </main>
  )
}
