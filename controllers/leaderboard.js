const leaderboardRouter = require('express').Router()
const User = require('../models/user')

leaderboardRouter.get('/', async (req, res) => {
  /*
    Fetches all users from database
    Sorts by wins
    Returns only top ten
    Cleans array so only username and wins are returned, no userID
    (passwordHash is removed in conversion to JSON)
  */
  const users = await User.find({})
  users.sort((a, b) => b.wins - a.wins)
  const topTen = users.slice(0, 10)
  const leaderboard = topTen.map((p) => {
    const player = {
      username: p.username,
      wins: p.wins
    }
    return player
  })
  res.json(leaderboard)
})

module.exports = leaderboardRouter
