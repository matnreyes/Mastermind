const Guess = ({ setUserGuess }) => {
  // Render column of different colored buttons with styles
  const colorArray = ['hover:bg-yellow-200',  'hover:bg-red-700', 'hover:bg-sky-700', 'hover:bg-pink-500', 'hover:bg-orange-500', 'hover:bg-violet-500', 'hover:bg-green-600']
  return (
    <div className="grid grid-cols-1">
      {colorArray.map((color, index) => 
        <div key={index}>
          <button 
            className={`${color} rounded-md text-transparent p-5`}
            value={index}
            onClick={(event) => setUserGuess(event)}
          >
            Button
          </button>
          <div className='border'/> 
        </div>

      )}
    </div>
  )
}

export default Guess