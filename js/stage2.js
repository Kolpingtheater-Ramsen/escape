let intermediate = ''
const target =
  'Salzwasserschnauzen Stürme Schatzsuche Pergamentrolle Tintenfische Kochlöffel'
    .split(' ')
    .join('')
    .toLowerCase()

const micIcon = document.getElementById('mic-icon')

// Check if the browser supports the SpeechRecognition API
if (!('webkitSpeechRecognition' in window)) {
  alert(
    'Your browser does not support the Speech Recognition API. Please try using Chrome or a compatible browser.'
  )
} else {
  // Create a new SpeechRecognition instance
  const recognition = new webkitSpeechRecognition()
  recognition.continuous = true // Enable continuous recognition mode
  recognition.interimResults = true // Return interim results
  recognition.lang = 'de-DE' // Set the language to German

  recognition.onstart = () => {
    console.log('Speech recognition started')
    micIcon.style.display = 'block'
  }

  recognition.onresult = (event) => {
    if (engine.stage !== 2) return
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const speech = event.results[i][0].transcript.trim()

      if (event.results[i].isFinal) {
        console.log(`Final recognized: ${speech}`)

        const score = stringSimilarity.compareTwoStrings(
          speech.split(' ').join('').split(',').join('').toLowerCase(),
          target
        )

        console.log(`Score: ${score}`)
        const progress = document.getElementById('word-acc')
        progress.style.width = `${score * 100}%`

        // Remove all non-alphanumeric characters expect ä, ö, ü, ß
        document.getElementById('output').innerHTML = speech
        recognition.stop()
        micIcon.style.display = 'none'
        if (score >= 0.95) {
          engine.nextStage()
          recognition.stop()
        } else {
          // Set text red
          setTimeout(() => {
            recognition.start()
            intermediate = ''
          }, 1000)
        }
      } else {
        // Set last words to the interim speech
        intermediate = speech
        console.log(`Interim recognized: ${speech}`)
        document.getElementById('output').innerHTML = intermediate
      }
    }
  }

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error)
  }

  // recognition.onend = () => {
  //   console.log('Speech recognition ended')
  //   // Restart the recognition when it ends
  //   recognition.start()
  // }

  // Start the speech recognition
  recognition.start()
}
