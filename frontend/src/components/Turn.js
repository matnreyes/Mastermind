import Guess from './Guess'

const Turn = ({ difficulty, setUserGuess}) => {
  // Used to dynamically create buttons based on user difficulty preference
  const guessesArray = new Array(difficulty)
  guessesArray.fill(0)

  return (
    <div className="flex border">
      {guessesArray.map((n, index) => 
        <Guess key={index} setUserGuess={setUserGuess}/>
      )}
    </div>
  )
}

export default Turn