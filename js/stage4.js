const videoStage4 = document.querySelector('#droidcam-video')

navigator.mediaDevices
  .getUserMedia({
    video: true,
  })
  .then((stream) => {
    videoStage4.srcObject = stream
  })

let correct = [false, false, false]

function formatInput(event) {
  const element = event
  element.value = element.value.split("").filter(e => e != " ").join(" ").toUpperCase()
  element.nextElementSibling.innerText = ` ${Math.floor((element.value.length + 1) / 2)} / ${(element.maxLength + 1) / 2}`

  const target = element.getAttribute('target')
  const index = element.getAttribute('indx')
  if (target == element.value.split(" ").join("").toLowerCase()) {
    element.nextElementSibling.style.color = 'green'
    element.style.color = 'green'
    correct[index] = true
  } else {
    element.nextElementSibling.style.color = 'black'
    element.style.color = 'black'
    correct[index] = false
  }

  if (correct.every(e => e)) {
    console.log('done')
  }
}