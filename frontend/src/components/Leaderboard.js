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
    <div className="overflow-x-auto shadow-lg pt-10">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Player</th>
            <th>Total wins</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((player, index) => 
          <tr key={index}>
            <th>{index}</th>
            <td>{player.username}</td>
            <td>{player.wins}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>

  )
}

export default Leaderboard