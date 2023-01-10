const guessRouter = require('express').Router()
const Game = require('../models/game')

guessRouter.post('/', async (req, res) => {
  const { secretCode, guess } = req.body
  const { tries, id } = req.body.game

  const results = {
    digit: 0,
    location: 0
  }

  const { endTime } = await Game.findById(id)

  if (tries >= 9) {
    const error = new Error('Out of guesses')
    error.name = 'GameOver'
    throw (error)
  }

  const currentTime = new Date()
  if (endTime < currentTime) {
    const error = new Error('Out of time')
    error.name = 'OutOfTime'
    throw error
  }

  if (guess.length !== secretCode.length) {
    const error = new Error('Guess is too long')
    error.name = 'InvalidGuessLength'
    throw (error)
  }

  // Validate guess
  const outOfRange = guess.filter((n) => n < 0 || n > 7)
  if (outOfRange.length > 0) {
    const error = new Error('Guess must be within range of 0 to 7')
    error.name = 'InvalidGuessRange'
    throw error
  }

  // Loads index of digits into map
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
