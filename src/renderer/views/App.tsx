import { ping, pong } from '@/services/ping-pong.ts'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    pong()
  }, [])

  return (
    <main>
      <div className="fixed top-0 left-0 inset-0 z-0">
        <div className="size-52 bg-cyan-600 rounded-full blur-[150px]"></div>
        <div className="absolute right-0 bottom-0 size-52 bg-cyan-600 rounded-full blur-[150px]"></div>
      </div>

      <section className="relative grid place-content-center h-dvh text-center gap-10">
        <h1 className="text-4xl font-bold">Electron App</h1>
        <p className="text-lg">
          ElectronJs + Vite + React + TailwindCSS + Typescript
        </p>
        <div className="flex gap-4 justify-center">
          <button
            className="font-bold py-2 px-5 rounded-2xl bg-blue-900 hover:bg-blue-700 cursor-pointer"
            onClick={() => alert('función alert()')}
          >
            Alerta
          </button>

          <button
            className="font-bold py-2 px-5 rounded-2xl bg-blue-900 hover:bg-blue-700 cursor-pointer"
            onClick={ping}
          >
            Ping
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
