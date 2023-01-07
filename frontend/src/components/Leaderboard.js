import { useState } from 'react'

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([])

  return (
    leaderboard.map((player, index) => (
      <div key={index}>
        {player.username} | {player.wins}
      </div>
    ))
  )
}