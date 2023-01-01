import { useState } from 'react'
import guessService from '../services/guesses'

const SendButton = ({ guess, code, guesses, setGuesses, setGuess, setResult, results, setSendButtonActive }) => {
  const handleClick = async () => {
    const response = await guessService.validateGuess(code, guess, guesses.length)
    const newGuesses = guesses.concat([guess])
    setGuesses(newGuesses)
    setGuess([])
    setResult(results.concat(response))
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