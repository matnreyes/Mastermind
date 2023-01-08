import PreviousGuess from "./PreviousGuess"
import Result from './Result'

const GuessHistory = ({ guesses, results }) => {
  return (
    <div>
      <h2 className="border text-amber-50 font-mono text-center">Guess History</h2>
      {guesses.map((guess, index) => 
        <div key={index} >
          <PreviousGuess guess={guess}/>
          <Result result={results[index]} guess={guess} />
        </div>
      )}
    </div>
  )
}


export default GuessHistory