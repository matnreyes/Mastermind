import { useState, useEffect } from 'react'
import codeService from '../services/code'
import userService from '../services/user'
import gameService from '../services/game'
import Turn from './Turn'
import DifficultyForm from './Difficulty'
import SendButton from './SendButton'
import GuessHistory from './GuessHistory'
import WinScreen from './WinScreen'
import LoseScreen from './LoseScreen'
import TriesCountdown from './TriesCountdown'
import TimeCountdown from './TimeCountdown'
import HintButton from './HintButton'

const Game = ({user, useAudio }) => {
  const [game, setGame] = useState()
  const [difficulty, setDifficulty] = useState(game ? game.difficulty : 4)
  const [code, setCode] = useState(game ? game.secretCode : null)
  const [guess, setGuess] = useState([])
  const [guesses, setGuesses] = useState(game ? [...game.guesses] : [])
  const [results, setResult] = useState(game ? [...game.results] : [])
  const [sendButtonActive, setSendButtonActive] = useState(false)
  const [gameStatus, setGameStatus] = useState('active')

  useEffect(() => {
    window.localStorage.removeItem('game')
    setGuess([])
    setGuesses([])
    setResult([])
  }, [gameStatus])

  // Handle win
  useEffect(() => {
    if (gameStatus === 'won') {
      gameService.setWin(game)
      userService.updateWins(user.username, user.token)
    }
    if (gameStatus === 'lost') {
      gameService.setLoss(game)
    }
    window.localStorage.removeItem('game')
  }, [gameStatus, user, game])

  
  const setGameDifficulty = async (event) => {
    const code = await codeService.fetchCode(event.target.value)
    const gameInfo = await gameService.newGame(code.length, code, user.userId)
    // Store game in localStorage
    setGame(gameInfo)
    window.localStorage.setItem('game', JSON.stringify(gameInfo))
    setDifficulty(code.length)
    setCode(code)
  }

  const setUserGuess = async (event, beatIndex) => {
    const guessArray = guess
    guessArray[beatIndex] = event.target.value
    if (!(guessArray.includes(undefined)) && guessArray.length === difficulty) {
      setSendButtonActive(true)
    }
    setGuess(guessArray)
  }

  const restartGame = () => {
    setGame(null)
    setGameStatus('active')
    setCode(null)
  }


  const endGame = () => {
    if (gameStatus === 'active') {
      return
    }

    return gameStatus === 'won'
    ? <WinScreen restartGame={restartGame} triesLeft={10 - game.tries}/>
    : <LoseScreen restartGame={restartGame}/>
  }

  const activeGame = () => (
    <>
      {code === null 
      ? <DifficultyForm setGameDifficulty={setGameDifficulty} />
      : 
        <div className="hero-content flex-col pt-8">
          <br></br>
          <div className="text-center py-4">
            <h3 className="text-5xl font-bold">Guess the musical code to save humanity</h3>
          </div>
          <div className="flex flex-row content-center gap-10">
            <TimeCountdown setGameStatus={setGameStatus} game={game}/>
            <TriesCountdown tries={(10 - game.tries)}/>
            <HintButton secretCode={code}/>
          </div>
          <div className="md:flex gap-4">
            <div className="min-w-full">
              <Turn setUserGuess={setUserGuess} difficulty={difficulty} guess={guess} />
              {sendButtonActive &&
                <SendButton guess={guess} code={code} guesses={guesses} setGuesses={setGuesses} setGuess={setGuess} results={results} setResult={setResult} setSendButtonActive={setSendButtonActive} setGameStatus={setGameStatus} game={game} setGame={setGame} useAudio={useAudio}/>
              }
            </div>
            <GuessHistory guesses={game.guesses} results={game.results}/>
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