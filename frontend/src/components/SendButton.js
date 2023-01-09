import guessService from '../services/guesses'
import gameService from '../services/game'
import handleSounds from '../utils/sounds'

const SendButton = ({ guess, code, guesses, setGuesses, setGuess, setResult, results, setSendButtonActive, setGameStatus, game, setGame, useAudio }) => {
  const handleGuess = async () => {
    // Play sound for each note
    console.log(useAudio)
    if (useAudio) {
      guess.forEach((note, index) => {
        handleSounds(note, index)
      })
    }

    // Check guess and update tries on game
    const response = await guessService.validateGuess(code, guess, guesses.length, game.endTime) 
    const updatedGame = await gameService.updateGame(game, {...game, tries: game.tries + 1, guesses: game.guesses.concat([guess]), results: game.results.concat(response)})
    setGame(updatedGame)
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

  return (
    <button
      className="btn gap-2 btn-secondary text-secondary-content min-w-full"
      onClick={() => handleGuess()}
    >
      Send guess
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M2.5,12A9.5,9.5,0,1,1,12,21.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        <path d="M7.5,12A4.5,4.5,0,1,1,12,16.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
      </svg>
    </button>
  )
}

export default SendButton