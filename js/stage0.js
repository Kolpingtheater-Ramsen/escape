let beepInterval
function start() {
    localStorage.setItem('started', Date.now())
    plantSound.play()
    plantSound.onended = () => {
        beepInterval = setInterval(() => {
            beepSound.play()
        }, 1000)
    }
}
