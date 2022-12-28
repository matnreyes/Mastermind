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

const fetchNumbers = async () => {
  // Fetch random numbers from API
  const randomNumbers = await axios.get(baseUrl)
  const numbers = await randomNumbers.data

  // Parse numbers into array
  const newNumbers = numbers.split('\n')
  const code = newNumbers.slice(0, 4)
  return code
}

const masterMind = async (tries, secretCode) => {
  // Losing case
  if (tries > 10) {
    console.log('========  GAME OVER  ========')
    return
  }

  // Fetch first guess from user
  console.log(`Enter guess #${tries}:`)
  const { userGuess } = await prompt.get(promptSchema)

  // Parse user response to int
  const guess = userGuess.split(', ')

  // Logic for checking correctness
  let correctNumber = 0
  let correctLocation = 0
  guess.forEach((number, index) => {
    if (secretCode.includes(number)) {
      correctNumber += 1

      if (number === secretCode[index]) {
        correctLocation += 1
      }
    }
  })

  // Give hint to user
  console.log(`${correctNumber} correct numbers and ${correctLocation} correct locations`)

  // Winning case
  if (correctLocation === 4) {
    console.log('==========================')
    console.log('         YOU WON!!!       ')
    console.log('==========================')
    return
  }

  // Check if guess is correct
  masterMind(tries + 1, secretCode)
}

// Main game function
const main = async () => {
  const secretCode = await fetchNumbers()
  const tries = 1
  masterMind(tries, secretCode)
}

main()
