const DifficultyForm = ({ setGameDifficulty }) => {
  return (
    <div className='relative w-full h-full content-center bg-slate-800'>
      <h3 className="text-center text-white">Choose difficulty</h3>
      <div>
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
  )
}

export default DifficultyForm