import guessService from '../services/guesses'

const SendButton = ({ guess, code, guesses, setGuesses, setGuess, setResult, results, setSendButtonActive, setGameStatus }) => {
  const handleClick = async () => {
    // Play sound for each note
    guess.forEach((note, index) => {
      handleSounds(note, index)
    })

    // Check guess
    const response = await guessService.validateGuess(code, guess, guesses.length)
    if (response.location === code.length) {
      setGameStatus('won')
      return
    }
    const newGuesses = guesses.concat([guess])
    if (newGuesses.length === 10) {
      setGameStatus('lost')
      return
    }
    const newResults = results.concat(response)

    // Resets turn
    setGuesses(newGuesses)
    setGuess([])
    setResult(newResults)
    setSendButtonActive(false)
  }

  const handleSounds = (note, index) => {
    return new Promise((resolve) => {
      const frequencies = [415.30, 466.16, 523.25, 554.37, 622.25, 698.46, 783.99, 830.61]
      const audioCtx = new AudioContext()
      const gain = audioCtx.createGain()
      const oscillator = audioCtx.createOscillator()
      oscillator.type = 'curve'
      oscillator.connect(gain)
      oscillator.frequency.value = frequencies[note]
      oscillator.connect(audioCtx.destination)
      oscillator.start(audioCtx.currentTime + index)
      oscillator.stop(audioCtx.currentTime + index + 0.5)
    })
  }

  return (
    <button
      className='w-full h-20 aspect-square bg-red-500 rounded-lg text-amber-50'
      onClick={() => handleClick()}
    >
      Send guess
    </button>
  )
}

export default SendButton