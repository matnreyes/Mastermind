import axios from 'axios'

const fetchCode = async (difficulty) => {
  const codeUrl = (`/api/code/${difficulty}`)
  const apiResponse = await axios.get(codeUrl)
  return apiResponse.data
}

const codeService = { fetchCode }

export default codeService