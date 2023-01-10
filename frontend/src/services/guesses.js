import axios from 'axios'

const baseUrl = '/api/guess'

const validateGuess = async (secretCode, guess, game) => {
  const response = await axios.post(baseUrl, { secretCode, guess, game })
  return response.data
}

const guessService = { validateGuess }

export default guessService