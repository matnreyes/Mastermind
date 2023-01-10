const LoseScreen = ({ restartGame}) => (
  <div className="modal-box w-96 bg-error text-error-content">
    <div className="card-body">
      <h2 className="card-title">You lost :(</h2>
      <p>You failed to save Earth from total destruction</p>
      <div className="card-actions">
        <button onClick={() => restartGame()} className="btn">Play again</button>
      </div>
    </div>
  </div>
)

export default LoseScreen
