const guessRouter = require('express').Router()

guessRouter.post('/', async (req, res) => {
  const { secretCode, guess } = req.body
  console.log(typeof(guess))

  // Check if number and/or placement are correct
  let correctGuess = 0
  let correctLocation = 0
  guess.forEach((number, index) => {
    if (secretCode.includes(number)) {
      correctGuess += 1
      if (number === secretCode[index]) {
        correctLocation += 1
      }
    }
  })

  res.json({ number: correctGuess, location: correctLocation})
})

module.exports = guessRouter
