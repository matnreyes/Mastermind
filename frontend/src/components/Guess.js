const Guess = ({ setUserGuess }) => {
  // Render column of different colored buttons with styles
  const colorArray = ['bg-yellow-200',  'bg-red-700', 'bg-sky-700', 'bg-pink-500', 'bg-orange-500', 'bg-violet-500', 'bg-green-600']

  return (
    <div className="grid grid-cols-1 p-5">
      {colorArray.map((color, index) => 
        <button 
          key={index}
          className={`bg-transparent hover:${color} rounded-md text-transparent`}
          value={index}
          onClick={(event) => setUserGuess(event)}
        >
          Button
        </button>      
      )}
    </div>
  )
}

export default Guess