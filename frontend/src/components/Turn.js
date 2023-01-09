import Guess from './Guess'

const Turn = ({ difficulty, setUserGuess, guess }) => {
  // Used to dynamically create buttons based on user difficulty preference
  const guessesArray = new Array(difficulty)
  guessesArray.fill(0)

  return (
    <div className="card w-full bg-base-100 shadow-xl ">
      <div className="card-body">
        <div className={`flex flex-col-${difficulty}`}>
          {
            guessesArray.map((n, beatIndex) => 
              <div className="w-full" key={beatIndex}>
                <Guess setUserGuess={setUserGuess} beatIndex={beatIndex} guess={guess}/>
              </div>
            )
          }
        </div>

      </div>
    </div>
  )
}

export default Turn