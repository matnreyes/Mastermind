import { useState } from 'react'
import codeService from '../services/code'
import Turn from './Turn'
import DifficultyForm from './Difficulty'
import SendButton from './SendButton'
import GuessHistory from './GuessHistory'

const Game = () => {
  const [difficulty, setDifficulty] = useState(4)
  const [code, setCode] = useState(null)
  const [guess, setGuess] = useState([])
  const [guesses, setGuesses] = useState([])
  const [results, setResult] = useState([])
  const [sendButtonActive, setSendButtonActive] = useState(false)

  const setGameDifficulty = async (event) => {
    const gameDifficulty = await codeService.fetchCode(event.target.value)
    setDifficulty(gameDifficulty.length)
    setCode(gameDifficulty)
  }

  const setUserGuess = async (event, beatIndex) => {
    const guessArray = guess
    guessArray[beatIndex] = event.target.value
    if (!(guessArray.includes(undefined)) && guessArray.length === difficulty) {
      setSendButtonActive(true)
    }
    console.log(guessArray)
    setGuess(guessArray)
  }


  return (
    <div className="bg-slate-800 flex">
      {code === null 
        ? <DifficultyForm setGameDifficulty={setGameDifficulty}/>
        : 
        <div className="flex-direction:column p-2 h-full flex-shrink">
          <h1 className="text-center text-amber-50 text-xl font-mono">Guess the code to save humanity</h1>
          <Turn setUserGuess={setUserGuess} difficulty={difficulty}/>
          {sendButtonActive &&
            <SendButton guess={guess} code={code} guesses={guesses} setGuesses={setGuesses} setGuess={setGuess} results={results} setResult={setResult} setSendButtonActive={setSendButtonActive}/>
          }
          <GuessHistory guesses={guesses}/>
        </div>
      }
    </div>
  )
}

export default Game