const usersRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

usersRouter.post('/', async (req, res) => {
  const { username, password } = req.body

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

module.exports = usersRouter
