import guessService from '../services/guesses'

const SendButton = ({ guess, code, guesses, setGuesses, setGuess, setResult, results, setSendButtonActive, setGameStatus }) => {
  const handleClick = async () => {
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
    setGuesses(newGuesses)
    setGuess([])
    setResult(newResults)
    setSendButtonActive(false)
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