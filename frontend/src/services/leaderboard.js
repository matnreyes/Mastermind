import axios from 'axios'

const getLeaderboard = async () => {
  const leaderboard = await axios.get('/api/leaderboard')
  return leaderboard.data
}

export default getLeaderboard
