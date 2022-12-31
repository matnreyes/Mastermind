import Guess from './Guess'

const Turn = ({ difficulty, setUserGuess}) => {
  // Used to dynamically create buttons based on user difficulty preference
  const guessesArray = new Array(difficulty)
  guessesArray.fill(0)

  return (
    <div className="flex divide-y-2">
      {guessesArray.map((n, index) => 
        <Guess setUserGuess={setUserGuess} key={index} />
      )}
    </div>
  )
}

export default Turn