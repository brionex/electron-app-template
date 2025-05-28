export const ping = () => {
  window.api.ping('ping desde el renderer')
}

export const pong = () => {
  window.api.pong((data) => {
    console.log(data)
  })
}
