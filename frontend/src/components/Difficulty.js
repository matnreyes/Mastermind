const DifficultyForm = ({ setGameDifficulty, setGame }) => {
  return (
    <div className="card w-96 bg-neutral text-neutral-content shadow-lg border border-secondary-content border-shadow">
      <div className="card-body items-center text-center">
        <h5 className="card-title">Select a difficulty</h5>
        <div className="card-actions justify-end">
          <button 
          value="4"
          onClick={(event) => setGameDifficulty(event)}
          type="button" 
          className="btn btn-success">
            Easy
          </button>
          <button 
          value="5"
          onClick={(event) => setGameDifficulty(event)}
          type="button" 
          className="btn btn-warning">
            Medium
          </button>
          <button 
          value="6"
          onClick={(event) => setGameDifficulty(event)}
          type="button" 
          className="btn btn-error">
            Hard
          </button>
        </div>
      </div>
    </div>
  )
}

export default DifficultyForm