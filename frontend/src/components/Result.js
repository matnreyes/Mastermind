const Result = ({ result, guess }) => {
  const locationArray  = new Array(result.location)
  locationArray.fill(0)
  const digitArray = new Array(result.digit - result.location)
  digitArray.fill(0)
  const incorrectArray = new Array(guess.length - (digitArray.length + locationArray.length))
  incorrectArray.fill(0)
  
  return (
    <div className="">
      <div className="rating rating-xs tooltip" data-tip={`${result.digit} correct, ${result.location} in the right location, ${incorrectArray.length} incorrect`}>
        {locationArray.map((circle, index) => 
          <input name="rating-9" className="mask mask-star-2 bg-yellow-400" key={index}/>
        )}
        {digitArray.map((circle, index) =>
          <input name="rating-9" className="mask mask-star-2 bg-red-400" key={index}/>
        )}
        {incorrectArray.map((n, index) =>
          <input name="rating-9" className="mask mask-star-2 bg-slate-400" key={index}/>
         )}
      </div>
    </div>

  )
}

export default Result