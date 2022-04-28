const plantSound = new Audio('audio/csgobombplant.mp3')
const beepSound = new Audio('audio/csgobeep.mp3')
const gameWindow = document.getElementById('game')

const engine = {
  stage: 0,
  stageTime: 0,
  stageTimeMax: 0,

  init: function () {
    this.stage = 0
    this.stageTime = 0
    this.stageTimeMax = 0
  },

  start: function () {
    this.stage = 1
    this.stageTime = Date.now()
    this.stageTimeMax = this.stageTime + 1000 * 60 * 60
    localStorage.setItem('stage', this.stage)
    localStorage.setItem('stageTime', this.stageTime)
    localStorage.setItem('stageTimeMax', this.stageTimeMax)

    loadStage(this.stage)
    plantSound.play()

    plantSound.onended = () => {
      this.beeper = setInterval(() => {
        beepSound.play()
      }, 1000)
    }
  },

  resume: function () {
    this.stage = localStorage.getItem('stage')
    this.stageTime = localStorage.getItem('stageTime')
    this.stageTimeMax = localStorage.getItem('stageTimeMax')
    loadStage(this.stage)

    plantSound.onended = () => {
      this.beeper = setInterval(() => {
        beepSound.play()
      }, 1000)
    }
  },

  loadStage: function (stage) {
    this.stage = stage
    fetch(`stages/stage${stage}.html`).then(async (e) => {
      gameWindow.style.opacity = 0
      gameWindow.innerHTML = await e.text()
      const script = document.createElement('script')
      script.src = `js/stage${stage}.js`
      document.getElementById('currentStage').innerText = stage
      setTimeout(() => {
        document.body.appendChild(script)
        const fadeIn = setInterval(() => {
          gameWindow.style.opacity = parseFloat(gameWindow.style.opacity) + 0.01
          if (parseFloat(gameWindow.style.opacity) >= 1) {
            clearInterval(fadeIn)
          }
        }, 10)
      }, 1000)
    })
  },

  nextStage: function () {
    this.stage++
    // Fade out
    gameWindow.style.opacity = 1
    const fadeOut = setInterval(() => {
      gameWindow.style.opacity = gameWindow.style.opacity - 0.01
      if (gameWindow.style.opacity <= 0) {
        clearInterval(fadeOut)
        gameWindow.style.opacity = 0
        this.loadStage(this.stage)
      }
    }, 10)
  }
}

engine.loadStage(1)