import PreviousGuess from "./PreviousGuess"

const GuessHistory = ({ guesses }) => {
  return (
    <>
      {guesses.map((guess, index) => 
        <div key={index} >
          <PreviousGuess guess={guess}/>
        </div>
      )}
    </>
  )
}


export default GuessHistory