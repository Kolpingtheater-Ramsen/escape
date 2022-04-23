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
setInterval(() => {
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
const cords = [
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
    for (let i = 0; i < cords.length; i++) {
        const [x, y] = cords[i]
        if (offsetX > x - 15 && offsetX < x + 15 && offsetY > y - 15 && offsetY < y + 15) {
            sequence.push(i)
            c4Text.innerText = sequence.join("")
            break
        }
    }
    if (sequence.length >= solution.length) {
        if (sequence.join('') === solution.join('')) {
            console.log('win')
            c4Text.style.color = 'green'
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