const leaderboardRouter = require('express').Router()
const User = require('../models/user')

leaderboardRouter.get('/', async (req, res) => {
  const users = await User.findMany({})
  users.sort((a, b) => b.wins - a.wins)
  console.log(users)
  res.json()
})

module.exports = leaderboardRouter
