const video = document.querySelector('#video')
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

navigator.mediaDevices
  .getUserMedia({
    video: true,
  })
  .then((stream) => {
    video.srcObject = stream
  })

video.addEventListener('loadeddata', () => {
  canvas.width = video.videoWidth * 1.25
  canvas.height = video.videoHeight * 1.25
  setInterval(() => {
    chromaKey()
  }, 40)
})

function chromaKey() {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const dataLength = imageData.data.length / 4
  for (let i = 0; i < dataLength; i++) {
    const offset = i * 4
    const red = imageData.data[offset + 0]
    const green = imageData.data[offset + 1]
    const blue = imageData.data[offset + 2]

    // 40, 60, 90
    const targetR = 120
    const targetG = 230
    const targetB = 140

    const diff = 50
    const diffR = Math.abs(red - targetR)
    const diffG = Math.abs(green - targetG)
    const diffB = Math.abs(blue - targetB)

    if (diffR < diff && diffG < diff && diffB < diff) {
      imageData.data[offset + 3] = 0
    }
  }
  ctx.putImageData(imageData, 0, 0)
}
