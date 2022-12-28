const guessRouter = require('express').Router()

guessRouter.post('/', async (req, res) => {
  const turn = req.body

  res.status(201).json(turn)
})

module.exports = guessRouter