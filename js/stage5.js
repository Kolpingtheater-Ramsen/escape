const videoStage5 = document.querySelector('#videoStage5')
const canvasStage5 = document.querySelector('#canvasStage5')
const ctx5 = canvasStage5.getContext('2d')
const keyCounter = document.getElementById('keyCounter')

const cordsStage5 = [
  [638, 404],
  [214, 351],
  [484, 34],
]

let key = 0
canvasStage5.addEventListener('click', (e) => {
  const x = e.offsetX
  const y = e.offsetY

  console.log(x, y)

  const [targetX, targetY] = cordsStage5[key]
  const diffX = Math.abs(x - targetX)
  const diffY = Math.abs(y - targetY)

  console.log(diffX, diffY)

  if (diffX < 20 && diffY < 20) {
    console.log("hit", key)
    key++

    if (key > 2) {
      clearInterval(chromaKey5)
      return engine.nextStage()
    }

    keyCounter.innerText = key
    canvasStage5.style['background-image'] = `url('img/Bild ${key + 1}.png')`; // = 
  }
})

navigator.mediaDevices
  .getUserMedia({
    video: true,
  })
  .then((stream) => {
    videoStage5.srcObject = stream
  })

videoStage5.addEventListener('loadeddata', () => {
  canvasStage5.width = videoStage5.videoWidth * 1.65
  canvasStage5.height = videoStage5.videoHeight * 1.4
  setInterval(() => {
    chromaKey5()
  }, 100)
})

function chromaKey5() {
  ctx5.drawImage(videoStage5, 0, 0, canvasStage5.width, canvasStage5.height)
  const imageData = ctx5.getImageData(0, 0, canvasStage5.width, canvasStage5.height)
  const dataLength = imageData.data.length / 4
  for (let i = 0; i < dataLength; i++) {
    const offset = i * 4
    const red = imageData.data[offset + 0]
    const green = imageData.data[offset + 1]
    const blue = imageData.data[offset + 2]

    // 40, 60, 90
    const targetR = 60
    const targetG = 210
    const targetB = 120

    const diff = 25
    const diffR = Math.abs(red - targetR)
    const diffG = Math.abs(green - targetG)
    const diffB = Math.abs(blue - targetB)

    if (diffR < diff && diffG < diff && diffB < diff) {
      imageData.data[offset + 3] = 0
    }
  }
  ctx5.putImageData(imageData, 0, 0)
}
