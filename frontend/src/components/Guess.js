import { useState } from 'react'

const Guess = () => {
  const [guess, setGuess] = useState()
  return (
    <div>
      <div className="bg-blend-saturation">
        <button className='bg-black'></button> <button></button> <button></button> <button></button>
      </div>
    </div>
  )
}

export default Guess