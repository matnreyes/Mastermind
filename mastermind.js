/* eslint-disable no-console */
const axios = require('axios')
const prompt = require('prompt')

const baseUrl = 'https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain'

// Validation for user prompt, saves a lot of space checking if user input is correct
const promptSchema = {
  properties: {
    userGuess: {
      pattern: /^[0-7], [0-7], [0-7], [0-7]$/,
      message: 'Guess format: 1, 2, 3, 4',
      required: true
    }
  }
}

// Maps index of secretCode
const mapCode = async (code) => {
  const indexMap = new Map()
  code.forEach((number, index) => {
    const indexes = indexMap.get(number)
    if (indexes) {
      indexMap.set(number, indexes.concat(index))
    } else {
      indexMap.set(number, [index])
    }
  })
  return indexMap
}

// Separte function since game is recursive, can be used as middleware later
const fetchNumbers = async () => {
  // Fetch random numbers from API
  const randomNumbers = await axios.get(baseUrl)
  const numbers = await randomNumbers.data

  // Parse numbers into array
  const newNumbers = numbers.split('\n')
  const code = newNumbers.slice(0, 4)
  return code
}

const masterMind = async (tries, secretCode, codeMap) => {
  // Losing case
  if (tries > 10) {
    console.log('==========================')
    console.log('        YOU LOST!!!       ')
    console.log('==========================')
    console.log(`ANSWER: ${secretCode}`)
    return
  }

  // Fetch first guess from user
  console.log(`Enter guess #${tries}:`)
  const { userGuess } = await prompt.get(promptSchema)

  // Parse user response to int
  const guess = userGuess.split(', ')

  // Logic for checking correctness while mapping guesses
  const results = {
    digits: 0,
    location: 0
  }
  const guessMap = new Map()
  guess.forEach((number, index) => {
    const isInCode = codeMap.get(number)
    if (isInCode) {
      results.digits += 1
      if (isInCode.includes(index)) {
        results.location += 1
      }

      // Map correct guesses
      const inGuessMap = guessMap.get(number)
      if (inGuessMap) {
        guessMap.set(number, inGuessMap + 1)
      } else {
        guessMap.set(number, 1)
      }
    }
  })

  // Checks that there aren't more correct guesses than indexes of secretCode
  guessMap.forEach((number, index) => {
    const mappedCode = codeMap.get(index)
    if (number > mappedCode.length) {
      results.digits -= (number - mappedCode.length)
    }
  })

  // Give hint to user
  console.log(`${results.digits} correct numbers and ${results.location} correct locations`)

  // Winning case
  if (results.location === 4) {
    console.log('==========================')
    console.log('         YOU WON!!!       ')
    console.log('==========================')
    return
  }

  // Check if guess is correct
  masterMind(tries + 1, secretCode, codeMap)
}

// Main game function
const main = async () => {
  const secretCode = await fetchNumbers()
  const codeMap = await mapCode(secretCode)
  const tries = 1
  masterMind(tries, secretCode, codeMap)
}

main()
