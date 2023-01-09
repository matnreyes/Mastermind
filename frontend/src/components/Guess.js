import { useState } from 'react'

const Guess = ({ setUserGuess, beatIndex, guess }) => {
  const [isActive, setIsActive] = useState(8)

  const setGuess = (event, beatIndex, index) => {
    setIsActive(index)
    setUserGuess(event, beatIndex)
  }
  
  // Render column of different colored buttons with styles
  const colorArray = ['hover:bg-yellow-200',  'hover:bg-red-700', 'hover:bg-sky-700', 'hover:bg-pink-500', 'hover:bg-orange-500', 'hover:bg-violet-500', 'hover:bg-green-600', 'hover:bg-teal-600']
  const activeArray = ['bg-yellow-200',  'bg-red-700', 'bg-sky-700', 'bg-pink-500', 'bg-orange-500', 'bg-violet-500', 'bg-green-600', 'bg-teal-600']
  return (
    <div>
      {colorArray.map((color, index) => {
        const style = isActive === index ? activeArray[index] : color
        return (
          <div className="flex flex-row border border-r-0 border-l-0" key={index}>
            <button
              className={`${style} btn-square rounded-md`}
              value={index}
              onClick={(event) => setGuess(event, beatIndex, index)}
            />
          </div>
          )
        })}
    </div>
  )
}

export default Guess