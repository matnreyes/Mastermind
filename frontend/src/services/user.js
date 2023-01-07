import axios from 'axios'

const updateWins = async (username, token) => {
  const winResponse = await axios.put(`/api/users/${username}`, { token })
  return winResponse
}

const addUser = async (credentials) => {
  const newUser = await axios.post('/api/users', credentials)
  return newUser.response
}

const userService = { updateWins, addUser }

export default userService