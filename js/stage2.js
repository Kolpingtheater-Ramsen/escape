'use strict'
const video = document.getElementById('webcam-video')
const canvas = document.getElementById('webcam-canvas')
const output = document.getElementById('display-canvas')
const accBar = document.getElementById('accuracy')
const outputCtx = output.getContext('2d')
const ctx = canvas.getContext('2d')
const minConfidence = 0.5
const VIDEO_WIDTH = 400
const VIDEO_HEIGHT = 300
const frameRate = 10

const detectorConfig = {
  architecture: 'ResNet50',
  outputStride: 16,
  inputResolution: { width: VIDEO_WIDTH, height: VIDEO_HEIGHT },
  multiplier: 1,
}

const DATA_COUNT = 9

const wantedAngles = [
  58.216848191633815, -35.45000126050178, 4.348386416667016, 93.2872625371241,
  -19.653878040716506, 131.01571878983583, 85.15260749286, 97.8230310578024,
  47.10672371542005,
]

const data = {
  labels: new Array(DATA_COUNT).fill(0).map((e, i) => i + 1),
  datasets: [
    {
      label: '',
      data: new Array(DATA_COUNT).fill(0).map((e) => Math.random() * 100 - 50),
      borderColor: 'blue',
      borderWidth: 2,
      borderSkipped: false,
    },
  ],
}

const chartConfig = {
  type: 'bar',
  data: data,
  options: {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    scales: {
      x: {
        min: -180,
        max: 180,
      },
    },
  },
}

const chartCtx = document.getElementById('chart').getContext('2d')
const chartInstance = new Chart(chartCtx, chartConfig)

poseDetection
  .createDetector(poseDetection.SupportedModels.PoseNet, detectorConfig)
  .then((detector) => {
    // preview screen
    navigator.mediaDevices.getUserMedia({ video: true }).then((vid) => {
      video.srcObject = vid
      const intervalID = setInterval(async () => {
        try {
          estimateMultiplePoses()
        } catch (err) {
          clearInterval(intervalID)
          console.log(err)
        }
      }, Math.round(1000 / frameRate))
      return () => clearInterval(intervalID)
    })

    const estimationConfig = {
      maxPoses: 1,
      flipHorizontal: false,
      scoreThreshold: 0.5,
      nmsRadius: 20,
    }

    function drawLine(keypoints, indexKeypoint1, indexKeypoint2) {
      const keypoint1 = keypoints[indexKeypoint1]
      const keypoint2 = keypoints[indexKeypoint2]

      if (keypoint1.score < minConfidence || keypoint2.score < minConfidence)
        return

      outputCtx.strokeStyle = 'red'
      outputCtx.strokeWidth = '2px'
      outputCtx.beginPath()
      outputCtx.moveTo(keypoint1.x * 2, keypoint1.y * 2)
      outputCtx.lineTo(keypoint2.x * 2, keypoint2.y * 2)
      outputCtx.stroke()

      const angle =
        (Math.atan2(keypoint2.y - keypoint1.y, keypoint2.x - keypoint1.x) /
          Math.PI) *
        180

      outputCtx.fillStyle = 'green'
      outputCtx.fillText(
        `${indexKeypoint1}-${indexKeypoint2} ${angle.toFixed(0)}`,
        ((keypoint1.x + keypoint2.x) / 2) * 2,
        ((keypoint1.y + keypoint2.y) / 2) * 2
      )

      // return angle
      return angle
    }

    function estimateMultiplePoses() {
      canvas.width = VIDEO_WIDTH
      canvas.height = VIDEO_HEIGHT
      ctx.clearRect(0, 0, VIDEO_WIDTH, VIDEO_HEIGHT)
      ctx.save()
      ctx.drawImage(video, 0, 0, VIDEO_WIDTH, VIDEO_HEIGHT)
      ctx.restore()

      detector.estimatePoses(canvas, estimationConfig).then((poses) => {
        outputCtx.clearRect(0, 0, VIDEO_WIDTH, VIDEO_HEIGHT)
        outputCtx.save()
        outputCtx.drawImage(canvas, 0, 0, VIDEO_WIDTH * 2, VIDEO_HEIGHT * 2)
        outputCtx.restore()

        // console.log(`got Poses ${JSON.stringify(poses)}`)
        const { keypoints } = poses[0]

        let angles = Array(DATA_COUNT).fill(0)

        drawLine(keypoints, 4, 2) // Left eye
        drawLine(keypoints, 2, 0)
        drawLine(keypoints, 0, 1)
        drawLine(keypoints, 1, 3) // Right eye

        // Right Arm
        angles[0] = drawLine(keypoints, 10, 8)
        angles[1] = drawLine(keypoints, 8, 6)

        // Left Arm
        angles[2] = drawLine(keypoints, 5, 7)
        angles[3] = drawLine(keypoints, 7, 9)

        angles[4] = drawLine(keypoints, 6, 5) // Shoulders
        drawLine(keypoints, 6, 12)
        drawLine(keypoints, 5, 11)
        drawLine(keypoints, 12, 11)

        // Right Leg
        angles[5] = drawLine(keypoints, 12, 14)
        angles[6] = drawLine(keypoints, 14, 16)

        // Left Leg
        angles[7] = drawLine(keypoints, 11, 13)
        angles[8] = drawLine(keypoints, 13, 15)

        outputCtx.font = '16px Arial'

        for (let i = 0; i < keypoints.length; i++) {
          const keypoint = keypoints[i]
          if (keypoint.score < minConfidence) continue
          outputCtx.fillStyle = 'red'
          outputCtx.beginPath()
          outputCtx.fillText(keypoint.name, keypoint.x * 2, keypoint.y * 2 + 10)
          outputCtx.arc(keypoint.x * 2, keypoint.y * 2, 3, 0, 2 * Math.PI)
          outputCtx.fill()
        }

        const angleDiff = angles.map((e, i) => (e ? e - wantedAngles[i] : null))
        chartInstance.data.datasets.forEach((dataset) => {
          dataset.data = angleDiff.map((e) => (e ? e : 0))
        })
        chartInstance.update()

        // Sum angleDiff
        const sum = angleDiff.reduce(
          (a, b) => (b ? Math.abs(a + b) : a + 90),
          0
        )

        const scaledSum = Math.sqrt(sum)
        // Max 30
        // Min 5

        console.log(scaledSum, Math.min(scaledSum, 30) / 30)

        accBar.style.width = 100 - (Math.min(scaledSum, 30) / 30) * 100 + '%'
        accBar.className = 'determinate'
        accBar.className += scaledSum < 5 ? ' green' : ' yellow'
      })
    }
  })
