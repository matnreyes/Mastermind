const axios = require('axios')
const prompt = require('prompt')

const baseUrl = 'https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain'

const promptSchema = {
  properties: {
    userGuess: {
      pattern: /^[0-7], [0-7], [0-7], [0-7]$/,
      message: 'Guess format: 1, 2, 3, 4',
      required: true
    }
  }
}

const masterMind = async (tries) => {
  if (tries === 10) {
    console.log('GAME OVER')
    return
  }

  // Parsing numbers from API to array of ints
  const randomNumbers = await axios.get(baseUrl)
  const numbers = randomNumbers.data
  const newNumbers = numbers.split('\n')
  newNumbers.splice(newNumbers.length - 1)
  console.log(newNumbers)

  // Fetch first guess from user
  console.log(`Enter guess #${tries}`)
  const { userGuess } = await prompt.get(promptSchema)

  // Parse user response to int
  const guess = userGuess.split(', ')

  // Check if guess is correct
  masterMind(tries + 1)
}

const tries = 1
masterMind(tries)
