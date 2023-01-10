const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    const error = new Error('You must provide username and password')
    error.name = 'MissingCredentials'
    throw error
  }

  // Encrypt password
  const passwordHash = await bcrypt.hash(password, 10)
  const user = new User({
    username,
    passwordHash,
    wins: 0
  })

  const savedUser = await user.save()

  res.status(201).json(savedUser)
})

// Route for updating user wins after a user wins
usersRouter.put('/:username', async (req, res) => {
  const { token } = req.body
  if (!jwt.verify(token, process.env.SECRET)) {
    const error = new Error('JWT token invalid')
    error.name('InvalidToken')
    throw error
  }

  const user = await User.findOne({ username: req.params.username })
  user.wins += 1
  await user.save()

  res.status(202).end()
})

usersRouter.get('/', async (req, res) => {
  const users = await User
    .find({})
    .populate('games', {
      secretCode: 0,
      startTime: 0,
      endTime: 0,
      user: 0
    })

  res.json(users)
})

module.exports = usersRouter
