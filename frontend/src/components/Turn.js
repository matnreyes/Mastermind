import Guess from './Guess'

const Turn = ({ difficulty, setUserGuess}) => {
  // Used to dynamically create buttons based on user difficulty preference
  const guessesArray = new Array(difficulty)
  guessesArray.fill(0)

  return (
    <div className="flex border bg-amber-50 rounded-lg">
      {guessesArray.map((n, beatIndex) => 
        <div key={beatIndex}>
          <Guess setUserGuess={setUserGuess} beatIndex={beatIndex}/>
          <div className="border"/>
        </div>  
      )}
    </div>
  )
}

export default Turn