const DifficultyForm = ({ setGameDifficulty }) => {
  return (
    <div className="grid w-screen h-screen place-items-center">
      <div className="grid bg-red-800 w-min-40 h-30 rounded-lg place-items-center p-3">
        <h3 className="text-center text-white">Choose difficulty</h3>
        <div className="flex space-x-1">
          <button 
            className="bg-white hover:bg-green-600 rounded-md"
            onClick={(event) => setGameDifficulty(event)} 
            value="4">
              Easy
          </button>
          <button
            className="bg-white hover:bg-yellow-600 rounded-md" 
            onClick={(event) => setGameDifficulty(event)} 
            value="5">
              Medium
          </button>
          <button
            className="bg-white hover:bg-red-600 rounded-md"
            onClick={(event) => setGameDifficulty(event)}
            value="6">
              Hard
          </button>
        </div>
      </div>
    </div>
  )
}

export default DifficultyForm