import axios from 'axios'

const baseUrl = '/api/guess'

const getGuess = async () => {
  const response = axios.get(baseUrl)
  return response.data
}

const guessService = { getGuess }

export default guessService