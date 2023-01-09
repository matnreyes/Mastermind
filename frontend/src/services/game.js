import axios from 'axios'
let token = 0
const baseUrl = '/api/games'

const setToken = (userToken) => {
  token = `bearer ${userToken}`
}

const newGame = async (difficulty, secretCode, userId) => {
  const gameResponse = await axios.post(baseUrl, {difficulty, secretCode, userId})
  return gameResponse.data
}

const updateGame = async (game, update) => {
  const gameResponse = await axios.put(`${baseUrl}/${game.id}`, update, { headers: {authorization: token} })
  return gameResponse.data
}

const setWin = async (game) => {
  const wonGame = {...game, won: true, finished: true}
  const winResponse = await axios.put(`${baseUrl}/${game.id}`, wonGame, { headers: {authorization: token}})
  return winResponse.data
}

const setLoss = async (game) => {
  const lostGame = {...game, won: false, finished: true}
  const loseResponse = await axios.put(`${baseUrl}/${game.id}`, lostGame, { headers: {authorization: token}})
  return loseResponse.data
}
const gameService = {newGame, updateGame, setWin, setLoss, setToken}

export default gameService