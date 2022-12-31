import { useState } from 'react'
import codeService from '../services/code'
import Turn from './Turn'
import DifficultyForm from './Difficulty'

const Game = () => {
  const [difficulty, setDifficulty] = useState(4)
  const [code, setCode] = useState(null)
  const [guess, setGuess] = useState([])

  const setGameDifficulty = async (event) => {
    const gameDifficulty = await codeService.fetchCode(event.target.value)
    setDifficulty(gameDifficulty.length)
    setCode(gameDifficulty)
  }

  const setUserGuess = async (event) => {
    setGuess(guess.concat(event.target.value))
    console.log(guess.concat(event.target.value))
  }
  
  return (
    <div className="bg-slate-300 flex">
      <h2>Guess the code to save humanity</h2>
      {code === null 
        ? <DifficultyForm setGameDifficulty={setGameDifficulty}/>
        : 
        <div className="flex-direction:column">
          <Turn setUserGuess={setUserGuess} difficulty={difficulty}/>
          <Turn setUserGuess={setUserGuess} difficulty={difficulty}/>
          <Turn setUserGuess={setUserGuess} difficulty={difficulty}/>
          <Turn setUserGuess={setUserGuess} difficulty={difficulty}/>
          <Turn setUserGuess={setUserGuess} difficulty={difficulty}/>
          <Turn setUserGuess={setUserGuess} difficulty={difficulty}/>
          <Turn setUserGuess={setUserGuess} difficulty={difficulty}/>
          <Turn setUserGuess={setUserGuess} difficulty={difficulty}/>
          <Turn setUserGuess={setUserGuess} difficulty={difficulty}/>

        </div>
      }
    </div>
  )
}

export default Game