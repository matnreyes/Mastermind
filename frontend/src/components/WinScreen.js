const WinScreen = ({ setGameStatus, setCode }) => {
  const restartGame = () => {
    setCode(null)
    setGameStatus('active')
  }
  return (
    <div className="grid w-screen place-items-center">
      <div className="bg-green-200 rounded-lg flex flex-col p-5">
        <h1 className="text-center">Congrats! You saved the Earth!</h1>
        <h3 className="text-center">Would you like to play again?</h3>
        <button onClick={() => restartGame()}> Play again</button>
      </div>
    </div>
  )
}

export default WinScreen