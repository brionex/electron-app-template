export const alertTest = () => {
  alert('(renderer) Test de alerta.')
}

export const pingTest = async () => {
  const res = await window.invoke.api('ping', {
    message: 'Mensaje desde el renderer -> pingTest().'
  })

  if (res.ok) {
    console.log('(Renderer):', res.data.message)
    alert('(Renderer): ' + res.data.message)
  }
}

export const asyncPingTest = async () => {
  const res = await window.invoke.api('asyncPing', {
    message: 'Mensaje desde el renderer -> asyncPingTest().'
  })

  if (res.ok) {
    console.log('(Renderer):', res.data.message)
    alert('(Renderer): ' + res.data.message)
  }
}

export const logPlatform = () => {
  window.invoke.api('logPlatform', null)
}
