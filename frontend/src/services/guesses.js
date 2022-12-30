import axios from 'axios'

const baseUrl = '/api/guess'

const validateGuess = async (secretCode, guess) => {
  const response = await axios.post(baseUrl, { secretCode, guess })
  return response.data
}

const guessService = { validateGuess }

export default guessService