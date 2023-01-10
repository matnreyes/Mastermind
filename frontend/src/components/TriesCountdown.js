const TriesCountdown = ({ tries }) => {
  return (
    <div className="pb-4 grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-success rounded-box text-success-content">
        <span className="countdown font-mono text-4xl">
          <span style={{"--value": tries}}></span>
        </span>
        guesses
      </div> 
    </div>
  )
}

export default TriesCountdown