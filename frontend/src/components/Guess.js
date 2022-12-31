const Guess = ({ setUserGuess }) => {
  return (
    <div className=" p-5">
      <ul>
        <li>
          <button 
            className="bg-transparent hover:bg-red-700 rounded-md text-transparent"
            value="0"
            onClick={(event) => setUserGuess(event)}
          >
            RButton
          </button>
        </li>
        <li>
          <button 
            className="bg-transparent hover:bg-sky-700 rounded-md text-transparent"
            value="1"
            onClick={(event) => setUserGuess(event)}
          >
            BButton
          </button>
        </li>
        <li>
          <button 
            className="bg-transparent hover:bg-yellow-200 rounded-md text-transparent"
            value="2"
            onClick={(event) => setUserGuess(event)}
          >
            YButton
          </button>
        </li>
        <li>
          <button 
            className="bg-transparent hover:bg-pink-500 rounded-md text-transparent"
            value="3"
            onClick={(event) => setUserGuess(event)}
          >
            PButton
          </button>
        </li>
        <li>
          <button 
            className="bg-transparent hover:bg-orange-500 rounded-md text-transparent"
            value="4"
            onClick={(event) => setUserGuess(event)}
          >
            YButton
          </button>
        </li>
        <li>
          <button 
            className="bg-transparent hover:bg-violet-500 rounded-md text-transparent"
            value="5"
            onClick={(event) => setUserGuess(event)}
          >
            PButton
          </button>
        </li>
        <li>
          <button 
            className="bg-transparent hover:bg-green-600 rounded-md text-transparent"
            value="6"
            onClick={(event) => setUserGuess(event)}
          >
            gButton
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Guess