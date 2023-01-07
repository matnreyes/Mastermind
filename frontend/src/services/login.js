import axios from 'axios'

const loginService = async ({ username, password }) => {
  const loginResponse = await axios.post('/api/login', { username, password })
  return loginResponse.data
}

export default loginService