const webcam = document.getElementById('webcam')

navigator.mediaDevices
  .getUserMedia({
    audio: false,
    video: {
      facingMode: 'user',
    },
  })
  .then((stream) => {
    webcam.srcObject = stream
    webcam.onloadedmetadata = async () => {
      webcam.play()
      console.log('Webcam ready')
      await setup()
      cleanup()
    }
  })

let model
let lastClassName
let warmedUp = false

async function setup() {
  if (!model)
    model = await tfTask.ObjectDetection.CocoSsd.TFJS.load({
      backend: 'webgl',
    })

  // Grab frame from webcam
  const img = tf.browser.fromPixels(webcam)

  // Run inference and update result.
  const start = Date.now()
  const result = await model.predict(img)
  const latency = Date.now() - start
  renderDetectionResult(result)
  resultEle.textContent = `Latency: ${latency}ms`
}

function cleanup() {
  //   Cleanup old bounding boxes
  const oldBboxes = document.getElementsByClassName('bounding-box')
  for (const bbox of oldBboxes) {
    bbox.remove()
  }
}

/** Render detection results. */
function renderDetectionResult(result) {
  console.log(result)

  cleanup()

  for (const obj of result.objects) {
    const { boundingBox, className, score } = obj
    const { originX, originY, width, height } = boundingBox

    const webcamPos = webcam.getBoundingClientRect()

    const webcamX = webcamPos.x
    const webcamY = webcamPos.y

    const bboxX = originX + webcamX
    const bboxY = originY + webcamY
    const bboxWidth = width // * webcamWidth
    const bboxHeight = height // * webcamHeight

    console.log(bboxX, bboxY, bboxWidth, bboxHeight)

    // Draw over webcam
    const div = document.createElement('div')
    div.className = 'bounding-box'
    div.style.left = `${bboxX}px`
    div.style.top = `${bboxY}px`
    div.style.width = `${bboxWidth}px`
    div.style.height = `${bboxHeight}px`
    div.style.position = 'absolute'

    div.style.border = `2px solid ${
      'bird' === className || 'teddy bear' === className ? 'green' : 'red'
    }`
    div.textContent = `${
      className == 'person' ? 'pirat' : className
    } (${Math.round(score * 100)}%)`

    webcam.parentElement.appendChild(div)

    if (className == 'bird' || className == 'teddy bear') {
      setTimeout(() => {
        engine.nextStage()
      }, 5000)
    }
  }
}
