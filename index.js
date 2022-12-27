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

const masterMind = async () => {
  let tries = 1
  // Parsing numbers from API to array of ints
  const randomNumbers = await axios.get(baseUrl)
  const numbers = randomNumbers.data
  const newNumbers = numbers.split('\n')
  newNumbers.splice(newNumbers.length - 1)

  // Fetch first guess from user
  console.log(`Enter guess #${tries}`)
  const { userGuess } = await prompt.get(promptSchema)
}

masterMind()
