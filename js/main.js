const gameWindow = document.getElementById('game')

const engine = {
  stage: 0,
  stageTime: 0,
  stageTimeMax: 0,
  beeper: null,

  init: function () {
    console.log('init')
    this.stage = 0
    this.stageTime = 0
    this.stageTimeMax = 0

    this.loadStage(0)
  },

  start: function () {
    this.stage = 1
    localStorage.setItem('stage', this.stage)
    localStorage.setItem('stageTime', this.stageTime)
    localStorage.setItem('stageTimeMax', this.stageTimeMax)

    this.loadStage(this.stage)
  },

  resume: function () {
    this.stage = localStorage.getItem('stage')
    this.loadStage(this.stage)
  },

  loadStage: function (stage) {
    this.stage = stage
    localStorage.setItem('stage', this.stage)
    fetch(`stages/stage${stage}.html`).then(async (e) => {
      gameWindow.style.opacity = 0
      gameWindow.innerHTML = await e.text()
      const script = document.createElement('script')
      script.src = `js/stage${stage}.js`
      document.getElementById('currentStage').innerText = Math.min(stage, 6)
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
  },
}

engine.loadStage(0)
