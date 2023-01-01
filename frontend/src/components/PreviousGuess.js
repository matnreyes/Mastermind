const PreviousGuess = ({ guess }) => {

  const colorArray = ['bg-yellow-200',  'bg-red-700', 'bg-sky-700', 'bg-pink-500', 'bg-orange-500', 'bg-violet-500', 'bg-green-600']
  return (
    <div className="flex w-1/6 bg-amber-50 rounded-sm">
      {guess.map((box, index) => 
        <div key={index} className={`${colorArray[box]} text-transparent border p-2 w-1/8`} />
      )}
    </div>
  )
}

export default PreviousGuess