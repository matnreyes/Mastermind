const guessRouter = require('express').Router()

guessRouter.post('/', async (req, res) => {
  const turn = req.body

  res.json(turn).status(201)
})

module.exports = guessRouter