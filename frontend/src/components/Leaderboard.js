import { useState, useEffect } from 'react'
import getLeaderboard from '../services/leaderboard'

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([])

  useEffect(() => {
    const fetchPlayers = async () => {
      const topPlayers = await getLeaderboard()
      setLeaderboard(topPlayers)
    }
    fetchPlayers()
  }, [])
  return (
    <div>
      {leaderboard.map((player, index) => 
        <div key={index}>
          {player.username} || {player.wins}
        </div>
        )
      }
    </div>
  )
}

export default Leaderboard