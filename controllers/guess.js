const guessRouter = require('express').Router()

guessRouter.post('/', async (req, res) => {
  const { secretCode, guess } = req.body

  // Loads index of digits into hashMap
  const codeRecurrence = new Map()
  secretCode.forEach((number, index) => {
    const recurrence = codeRecurrence.get(number)
    if (recurrence) {
      codeRecurrence.set(number, recurrence.concat(index))
    } else {
      codeRecurrence.set(number, [index])
    }
  })

  // Check if number and/or placement are correct
  const results = {
    digit: 0,
    location: 0
  }
  const guessHash = new Map()
  guess.forEach((number, index) => {
    const isInCode = codeRecurrence.get(number)
    if (isInCode && isInCode.includes(index)) {
      results.location += 1
      results.digit += 1
    } else if (isInCode) {
      results.digit += 1
      const inGuessHash = guessHash.get(number)
      if (inGuessHash) {
        guessHash.set(number, inGuessHash + 1)
      } else {
        guessHash.set(number, 1)
      }
    }
  })

  guessHash.forEach(number => {
    results.digit -= number
  })

  res.json(results)
})

module.exports = guessRouter
