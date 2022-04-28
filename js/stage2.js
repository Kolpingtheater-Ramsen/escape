// window.location.href = 'stages/mm-js/index.html'

window.addEventListener('message', (e) => {
  console.log(e)
  if (e.data === 'minerman') engine.nextStage()
})
