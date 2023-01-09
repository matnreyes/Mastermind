import PreviousGuess from "./PreviousGuess"
import Result from './Result'

const GuessHistory = ({ guesses, results }) => (
    <div>
      <table className="table w-full shadow-lg">
        <thead>
          <tr>
            <th></th>
            <th>User guess</th>
            <th>Results</th>
          </tr>
        </thead>
        <tbody>
          {guesses.map((guess, index) => 
            <tr key={index}>
              <th>{index + 1}</th>
              <td><PreviousGuess guess={guess}/></td>
              <td><Result result={results[index]} guess={guess}/></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
)


export default GuessHistory