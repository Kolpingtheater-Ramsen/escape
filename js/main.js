const plantSound = new Audio('audio/csgobombplant.mp3')
const beepSound = new Audio('audio/csgobeep.mp3')

let beepInterval
function start() {
  localStorage.setItem('started', Date.now())
  plantSound.play()
  plantSound.onended = () => 
}

if (localStorage.getItem('started')) {
    beepInterval = setInterval(() => {
      beepSound.play()
    }, 1000)
  }
}

const stage = 6

fetch(`stages/stage${stage}.html`).then(async (e) => {
  document.getElementById('game').innerHTML = await e.text()
  const script = document.createElement('script')
  script.src = `js/stage${stage}.js`
  setTimeout(() => {
    document.body.appendChild(script)
  }, 1000)
})
