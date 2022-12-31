import { useState } from 'react'
import guessService from '../services/guesses'

const SendButton = ({ guess, code }) => {
  const handleClick = async () => {
    const response = await guessService.validateGuess(code, guess)
    console.log(response)
  }
  return (
    <button
      className=' aspect-square'
      onClick={() => handleClick()}
    >
      Send guess
    </button>
  )
}

export default SendButton