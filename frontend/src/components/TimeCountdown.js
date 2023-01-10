import { useState } from 'react'

const TimeCountdown = ({ setGameStatus, game }) => {
  const [second, setSecond] = useState(90)
  setTimeout(() => {
    setSecond(second - 1)
    if (second <= 0) {
     setGameStatus('lost')
    }
  }, 1000)

  return (
    <div className="pb-4 grid grid-flow-col gap-5 text-center auto-cols-max">
    <div className="flex flex-col p-2 bg-warning rounded-box text-warning-content">
      <span className="countdown font-mono text-3xl">
        <span style={{"--value": second}}></span>
      </span>
      secs
    </div> 
  </div>
)}

export default TimeCountdown