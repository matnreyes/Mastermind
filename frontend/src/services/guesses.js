import axios from 'axios'

const baseUrl = '/api/guess'

const validateGuess = async (secretCode, guess, tries) => {
  const response = await axios.post(baseUrl, { secretCode, guess, tries })
  return response.data
}

const guessService = { validateGuess }

export default guessService