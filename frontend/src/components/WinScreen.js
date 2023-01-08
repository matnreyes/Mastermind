const WinScreen = ({ setGameStatus, setCode }) => {
  const restartGame = () => {
    setCode(null)
    setGameStatus('active')
  }
  return (
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">You won!</h2>
        <p>You saved Earth from total destruction. Would you like to play again?</p>
        <div className="card-actions">
          <button onClick={() => restartGame()} className="btn">Play again</button>
        </div>
      </div>
    </div>
  )
}

export default WinScreen