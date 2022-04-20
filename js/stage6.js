const morse = {
    'a': '.-',
    'b': '-...', 'c': '-.-.', 'd': '-..',
    'e': '.',
    'f': '..-.', 'g': '--.',
    'h': '....', 'i': '..',
    'j': '.---', 'k': '-.-',
    'l': '.-..', 'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.', 'q': '--.-', 'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-', 'w': '.--',
    'x': '-..-', 'y': '-.--', 'z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': '  '
};

clearInterval(beepInterval)

const snd = new Audio('audio/csgobeep.mp3')
function beep() {
    const word = "sussy baka  "
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
}
