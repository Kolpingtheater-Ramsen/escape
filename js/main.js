const plantSound = new Audio('audio/csgobombplant.mp3')
const beepSound = new Audio('audio/csgobeep.mp3')

const stage = 4

fetch(`stages/stage${stage}.html`).then(async (e) => {
  document.getElementById('game').innerHTML = await e.text()
  const script = document.createElement('script')
  script.src = `js/stage${stage}.js`
  setTimeout(() => {
    document.body.appendChild(script)
  }, 1000)
})