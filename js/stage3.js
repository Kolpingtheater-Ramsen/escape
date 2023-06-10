const icons = ['🌙', '⭐', '🟥', '➕', '⚠️', '⚫', '❤️', '']
// 🌙 G Gray
// ⭐ R White
// 🟥 O Red
// ➕ G Green
// ⚠️ B
// ⚫ A
// ❤️ R

const colors = [
  'rgba(0, 0, 0, 0.5)',
  'rgba(255, 255, 255, 0.5)',
  'rgba(255, 0, 0, 0.5)',
  'rgba(0, 255, 0, 0.5)',
  'rgba(0, 0, 255, 0.5)',
  'rgba(0, 0, 0, 0.5)',
  'rgba(255, 0, 255, 0.5)',
  'rgba(255, 255, 255, 1)',
]

const pass = 'grogbar'

const iconContainer = document.getElementById('icon-container')

let i = 0
setInterval(() => {
  iconContainer.innerHTML = icons[i]
  iconContainer.parentElement.style.background = colors[i]
  i++
  if (i >= icons.length) {
    i = 0
  }
}, 1000)

const input = document.getElementById('input')

input.onkeyup = (event) => {
  if (input.value.toLowerCase() === pass && engine.stage === 3) {
    engine.nextStage()
  }
}
