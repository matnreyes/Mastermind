const WinScreen = ({ setGameStatus, setCode }) => {
  const restartGame = () => {
    setCode(null)
    setGameStatus('active')
  }
  return (
    <div className="flex flex-col bg-green-200 py-6 rounded-lg">
      <h1 className="text-center">Congrats! You saved the Earth!</h1>
      <h3 className="text-center">Would you like to play again?</h3>
      <button onClick={() => restartGame()}> Play again</button>
    </div>
  )
}

export default WinScreen