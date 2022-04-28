const morse = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
    ' ': '  '
};

if (window.beepInterval) clearInterval(window.beepInterval)

const snd = new Audio('audio/csgobeep.mp3')

const word = "kaboom "
const morseWord = word.split("").map(char => morse[char]).join(" ")
console.log(morseWord)

let cursor = 0
const morseInterval = setInterval(() => {
    if (cursor > morseWord.length) cursor = 0
    const char = morseWord[cursor]
    if (char === ".") {
        snd.playbackRate = 1
        snd.play()
    } else if (char === "-") {
        snd.playbackRate = 0.5
        snd.play()
    }
    cursor++
}, 1000)

// Cords
const cordsStage6 = [
    [372, 470],
    [322, 330],
    [369, 325],
    [417, 325],
    [323, 377],
    [373, 377],
    [421, 377],
    [320, 420],
    [369, 417],
    [418, 419]
]

// Keypad
const solution = [4, 2, 1, 3, 3, 7]
let sequence = []

const c4Text = document.getElementById('c4_text')
document.getElementById('c4').addEventListener('click', (e) => {
    const { offsetX, offsetY } = e
    for (let i = 0; i < cordsStage6.length; i++) {
        const [x, y] = cordsStage6[i]
        if (offsetX > x - 15 && offsetX < x + 15 && offsetY > y - 15 && offsetY < y + 15) {
            sequence.push(i)
            c4Text.innerText = sequence.join("")
            break
        }
    }
    if (sequence.length >= solution.length) {
        if (sequence.join('') === solution.join('')) {
            engine.nextStage()
            c4Text.style.color = 'green'
            clearInterval(chromaKey6)
            clearInterval(morseInterval)
        } else {
            // console.log('lose')
            sequence = []
            c4Text.style.color = 'red'
            setTimeout(() => {
                c4Text.style.color = 'black'
                c4Text.innerText = sequence.join("")
            }, 1000)
        }
    }
})

const videoStage6 = document.querySelector('#videoStage6')
const canvasStage6 = document.querySelector('#canvasStage6')
const ctx6 = canvasStage6.getContext('2d')

navigator.mediaDevices
    .getUserMedia({
        video: true,
    })
    .then((stream) => {
        videoStage6.srcObject = stream
    })

videoStage6.addEventListener('loadeddata', () => {
    canvasStage6.width = videoStage6.videoWidth * 1.65
    canvasStage6.height = videoStage6.videoHeight * 1.4
    setInterval(() => {
        chromaKey6()
    }, 100)
})

function chromaKey6() {
    ctx6.drawImage(videoStage6, 0, 0, canvasStage6.width, canvasStage6.height)
    const imageData = ctx6.getImageData(0, 0, canvasStage6.width, canvasStage6.height)
    const dataLength = imageData.data.length / 4
    for (let i = 0; i < dataLength; i++) {
        const offset = i * 4
        const red = imageData.data[offset + 0]
        const green = imageData.data[offset + 1]
        const blue = imageData.data[offset + 2]

        // 40, 60, 90
        const targetR = 60
        const targetG = 210
        const targetB = 120

        const diff = 25
        const diffR = Math.abs(red - targetR)
        const diffG = Math.abs(green - targetG)
        const diffB = Math.abs(blue - targetB)

        if (diffR < diff && diffG < diff && diffB < diff) {
            imageData.data[offset + 3] = 0
        }
    }
    ctx6.putImageData(imageData, 0, 0)
}
