import { useState, useEffect } from 'react'
import codeService from '../services/code'
import Turn from './Turn'
import DifficultyForm from './Difficulty'
import SendButton from './SendButton'
import GuessHistory from './GuessHistory'
import WinScreen from './WinScreen'
import LoseScreen from './LoseScreen'
import userService from '../services/user'

const Game = ({user}) => {
  const [difficulty, setDifficulty] = useState(4)
  const [code, setCode] = useState(null)
  const [guess, setGuess] = useState([])
  const [guesses, setGuesses] = useState([])
  const [results, setResult] = useState([])
  const [sendButtonActive, setSendButtonActive] = useState(false)
  const [gameStatus, setGameStatus] = useState('active')

  useEffect(() => {
    setGuess([])
    setGuesses([])
    setResult([])

  }, [code])

  useEffect(() => {
    if (gameStatus === 'won') {
      userService.updateWins(user.username, user.token)
    }
  }, [gameStatus, user])

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
    setGuess(guessArray)
  }

  const activeGame = () => (
    <div>
    {code === null 
      ? <DifficultyForm setGameDifficulty={setGameDifficulty}/>
      : 
      <div className="flex">
        <div className="flex-direction:column p-2 h-full flex-shrink">
          <h1 className="text-center text-amber-50 text-xl font-mono">Guess the code to save humanity</h1>
          <Turn setUserGuess={setUserGuess} difficulty={difficulty} guesses={guesses} results={results}/>
          {sendButtonActive &&
            <SendButton guess={guess} code={code} guesses={guesses} setGuesses={setGuesses} setGuess={setGuess} results={results} setResult={setResult} setSendButtonActive={setSendButtonActive} setGameStatus={setGameStatus}/>
          }
        </div>
        <GuessHistory guesses={guesses} results={results}/>
      </div>
    }
    </div>
  )

  return (
    <div className="bg-slate-800 flex">
      {gameStatus === 'won'
      ? <WinScreen setGameStatus={setGameStatus} setCode={setCode}/>
      : <div>
        { gameStatus === 'lost'
        ? <LoseScreen />
        : activeGame() }
        </div>}
    </div>
  )
}

export default Game