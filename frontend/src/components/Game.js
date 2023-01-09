import { useState, useEffect } from 'react'
import codeService from '../services/code'
import userService from '../services/user'
import Turn from './Turn'
import DifficultyForm from './Difficulty'
import SendButton from './SendButton'
import GuessHistory from './GuessHistory'
import WinScreen from './WinScreen'
import LoseScreen from './LoseScreen'
import TriesCountdown from './TriesCountdown'

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

  const endGame = () => {
    if (gameStatus === 'active') {
      return
    }

    return gameStatus === 'won'
    ? <WinScreen setGameStatus={setGameStatus} setCode={setCode} triesLeft={10 - results.length} />
    : <LoseScreen setCode={setCode} setGameStatus={setGameStatus} />
  }

  const activeGame = () => (
    <>
      {code === null 
      ? <DifficultyForm setGameDifficulty={setGameDifficulty}/>
      : 
        <div className="hero-content flex-col pt-8">
          <br></br>
          <div className="text-center py-4">
            <h3 className="text-5xl font-bold">Guess the musical code to save humanity</h3>
          </div>
          <TriesCountdown tries={guesses.length}/>
          <div className="md:flex gap-4">
            <div className="min-w-full">
              <Turn setUserGuess={setUserGuess} difficulty={difficulty} guess={guess} />
              {sendButtonActive &&
                <SendButton guess={guess} code={code} guesses={guesses} setGuesses={setGuesses} setGuess={setGuess} results={results} setResult={setResult} setSendButtonActive={setSendButtonActive} setGameStatus={setGameStatus}/>
              }
            </div>
            <GuessHistory guesses={guesses} results={results}/>
          </div>
        </div>}
    </>
  )

  return (
    <>
      {gameStatus === 'active' 
      ? activeGame()
      : endGame()}
    </>
  )
}

export default Game