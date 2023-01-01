const guessRouter = require('express').Router()

guessRouter.post('/', async (req, res) => {
  const { secretCode, guess, tries } = req.body
  const results = {
    digit: 0,
    location: 0
  }

  if (tries > 9) {
    const error = new Error('Out of guesses')
    error.name = 'GameOver'
    throw (error)
  }

  if (guess.length !== secretCode.length) {
    const error = new Error('Guess is too long')
    error.name = 'InvalidGuessLength'
    throw (error)
  }

  // Loads index of digits into hashMap
  const codeRecurrence = new Map()
  secretCode.forEach((number, index) => {
    const indexes = codeRecurrence.get(number)
    if (indexes) {
      codeRecurrence.set(number, indexes.concat(index))
    } else {
      codeRecurrence.set(number, [index])
    }
  })

  // Check if number and/or placement are correct
  const guessHash = new Map()
  guess.forEach((number, index) => {
    const isInCode = codeRecurrence.get(number)

    if (isInCode) {
      results.digit += 1
      if (isInCode.includes(index)) {
        results.location += 1
      }

      // Map correct guesses
      const inGuessHash = guessHash.get(number)
      if (inGuessHash) {
        guessHash.set(number, inGuessHash + 1)
      } else {
        guessHash.set(number, 1)
      }
    }
  })

  // Solved issue where duplicate numbers gave wrong hints
  guessHash.forEach((number, index) => {
    const hashedCode = codeRecurrence.get(index)
    if (number > hashedCode.length) {
      results.digit -= number - hashedCode.length
    }
  })

  res.json(results)
})

module.exports = guessRouter
