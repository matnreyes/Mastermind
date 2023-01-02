import guessService from '../services/guesses'

const SendButton = ({ guess, code, guesses, setGuesses, setGuess, setResult, results, setSendButtonActive }) => {
  const handleClick = async () => {
    const response = await guessService.validateGuess(code, guess, guesses.length)
    if (response.location === 4) {
      console.log('Congrats, you won')
    }
    const newGuesses = guesses.concat([guess])
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