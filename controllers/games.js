/* eslint-disable no-underscore-dangle */
const gameRouter = require('express').Router()
const Game = require('../models/game')
const User = require('../models/user')

gameRouter.get('/', async (req, res) => {
  const games = await Game.find({})

  res.json(games)
})

// Start a new game in DB
gameRouter.post('/', async (req, res) => {
  const { difficulty, secretCode } = req.body
  const userId = req.body.user.id
  const user = await User.findById(userId)

  const newGame = new Game({
    user: user.id,
    difficulty,
    secretCode
  })

  const savedGame = await newGame.save()
  user.games = user.games.concat(savedGame._id)
  await user.save()

  res.status(201).json(newGame)
})

// Flexible update route for game
gameRouter.put('/:id', async (req, res) => {
  const {
    tries,
    won,
    finished,
    gameTime
  } = req.body

  // Prevent users from updating everything
  const updatedGame = {
    tries,
    won,
    finished,
    gameTime
  }
  const game = await Game.findByIdAndUpdate(req.params.id, updatedGame, { new: true })
  res.status(200).json(game)
})

module.exports = gameRouter
