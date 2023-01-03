const userRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

userRouter.post('/', async (req, res) => {
  const { username, password } = req.body
  // Encrypt password
  const passwordHash = bcrypt.hash(password, 10)

  const user = new User({
    username,
    passwordHash
  })
  
  const savedUser = await user.save()
  res.status(201).json(savedUser)
})

module.exports = userRouter
