import { useState } from 'react'

const Guess = () => {
  const [guess, setGuess] = useState()
  return (
    <div>
      <input value={guess} onChange={(event) => setGuess(event.target.value)}></input><button>Submit guess</button>
    </div>
  )
}

export default Guess