const DifficultyForm = ({ setGameDifficulty }) => {
  return (
    <div className='bg-gray-700'>
      <h3 className="flex">Choose difficulty</h3>
      <div>
        <button 
          onClick={(event) => setGameDifficulty(event)} 
          value="4">
            Easy
        </button>
        <button 
          onClick={(event) => setGameDifficulty(event)} 
          value="5">
            Medium
        </button>
        <button
          onClick={(event) => setGameDifficulty(event)}
          value="6">
            Hard
        </button>
      </div>
    </div>
  )
}

export default DifficultyForm