/* eslint-disable no-underscore-dangle */
const loginRouter = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

loginRouter.post('/', async (req, res) => {
  const { username, password } = req.body

  // Validate user input
  if (!username || !password) {
    const error = new Error('You must provide username and password')
    error.name = 'MissingCredentials'
    throw error
  }

  // Find user that matches credentials
  const user = await User.findOne({ username })

  // Checking if password correct
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)

  if (!passwordCorrect) {
    const error = new Error('Invalid username or password')
    error.name = 'InvalidCredentials'
    throw error
  }

  const userForToken = {
    username: user.username,
    id: user._id
  }

  const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '20m' })
  const tokenExpiration = new Date(Date.now() + 1000 * 60 * 20)

  res.status(200).send({ token, username, tokenExpiration })
})

module.exports = loginRouter
