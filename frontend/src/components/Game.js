import { useState, useEffect } from 'react'
import codeService from '../services/code'
import Guess from './Guess'
import DifficultyForm from './Difficulty'

const Game = () => {
  const [difficulty, setDifficulty] = useState(4)
  const [code, setCode] = useState(null)

  const setGameDifficulty = async (event) => {
    const gameDifficulty = await codeService.fetchCode(event.target.value)
    setDifficulty(gameDifficulty.length)
    setCode(gameDifficulty)
  }
  
  return (
    <div className="bg-slate-300 flex">
      <h2>Guess the code to save humanity</h2>
      {code === null && <DifficultyForm setGameDifficulty={setGameDifficulty}/>}
      <ul className=''>
        <li className='p-10'>
          <Guess />
        </li>
        <li className='p-10'>
          <Guess />
        </li>
      </ul>
    </div>
  )
}

export default Game