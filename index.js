const axios = require('axios')

const baseUrl = 'https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain'

const masterMind = async () => {
  // Parsing numbers from API to array of ints
  const randomNumbers = await axios.get(baseUrl)
  const numbers = randomNumbers.data
  const newNumbers = numbers.split('\n')
  newNumbers.splice(newNumbers.length - 1)
}

masterMind()
