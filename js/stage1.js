document.getElementById('stage1InputContainer').addEventListener('keyup', (e) => {
    e.target.value = e.target.value.toUpperCase()
    if (e.target.value === 'KABOOM') {
        e.target.setAttribute('disabled', true)
        e.target.style.color = 'green'
        engine.nextStage()
    }
})