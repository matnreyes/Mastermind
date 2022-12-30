import { useState } from 'react'

const Guess = () => {
  const [guess, setGuess] = useState()
  return (
    <div>
      <div>
        <ul>
          <li>
            <button 
            className="bg-transparent hover:bg-red-700 rounded-md text-transparent">
              RButton
            </button>
            <button 
            className="bg-transparent hover:bg-red-700 rounded-md text-transparent">
              RButton
            </button>
            <button 
            className="bg-transparent hover:bg-red-700 rounded-md text-transparent">
              RButton
            </button>
            <button 
            className="bg-transparent hover:bg-red-700 rounded-md text-transparent">
              RButton
            </button>
          </li>
          <li>
            <button 
            className="bg-transparent hover:bg-sky-700 rounded-md text-transparent">
              BButton
            </button>
            <button 
            className="bg-transparent hover:bg-sky-700 rounded-md text-transparent">
              BButton
            </button>
            <button 
            className="bg-transparent hover:bg-sky-700 rounded-md text-transparent">
              BButton
            </button>
            <button 
            className="bg-transparent hover:bg-sky-700 rounded-md text-transparent">
              BButton
            </button>
          </li>
          <li>
            <button 
            className="bg-transparent hover:bg-yellow-200 rounded-md text-transparent">
              YButton
            </button>
            <button 
            className="bg-transparent hover:bg-yellow-200 rounded-md text-transparent">
              YButton
            </button>
            <button 
            className="bg-transparent hover:bg-yellow-200 rounded-md text-transparent">
              YButton
            </button>
            <button 
            className="bg-transparent hover:bg-yellow-200 rounded-md text-transparent">
              YButton
            </button>
          </li>
          <li>
            <button 
            className="bg-transparent hover:bg-pink-500 rounded-md text-transparent">
              PButton
            </button>
            <button 
            className="bg-transparent hover:bg-pink-500 rounded-md text-transparent">
              PButton
            </button>
            <button 
            className="bg-transparent hover:bg-pink-500 rounded-md text-transparent">
              PButton
            </button>
            <button 
            className="bg-transparent hover:bg-pink-500 rounded-md text-transparent">
              PButton
            </button>
          </li>
          <li>
            <button 
            className="bg-transparent hover:bg-orange-500 rounded-md text-transparent">
              YButton
            </button>
            <button 
            className="bg-transparent hover:bg-orange-500 rounded-md text-transparent">
              YButton
            </button>
            <button 
            className="bg-transparent hover:bg-orange-500 rounded-md text-transparent">
              YButton
            </button>
            <button 
            className="bg-transparent hover:bg-orange-500 rounded-md text-transparent">
              YButton
            </button>
          </li>
          <li>
            <button 
            className="bg-transparent hover:bg-violet-500 rounded-md text-transparent">
              PButton
            </button>
            <button 
            className="bg-transparent hover:bg-violet-500 rounded-md text-transparent">
              PButton
            </button>
            <button 
            className="bg-transparent hover:bg-violet-500 rounded-md text-transparent">
              PButton
            </button>
            <button 
            className="bg-transparent hover:bg-violet-500 rounded-md text-transparent">
              PButton
            </button>
          </li>
          <li>
            <button 
            className="bg-transparent hover:bg-green-600 rounded-md text-transparent">
              gButton
            </button>
            <button 
            className="bg-transparent hover:bg-green-600 rounded-md text-transparent">
              gButton
            </button>
            <button 
            className="bg-transparent hover:bg-green-600 rounded-md text-transparent">
              gButton
            </button>
            <button 
            className="bg-transparent hover:bg-green-600 rounded-md text-transparent">
              gButton
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Guess