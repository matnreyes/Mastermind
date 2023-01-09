import axios from 'axios'

const baseUrl = '/api/games'

const newGame = async (difficulty, secretCode, userId) => {
  const gameResponse = await axios.post(baseUrl, {difficulty, secretCode, userId})
  return gameResponse.data
}

const updateGame = async (game, update) => {
  const gameResponse = await axios.put(`${baseUrl}/${game.id}`, update)
  return gameResponse.data
}

const setWin = async (game) => {
  const wonGame = {...game, won: true, finished: true}
  const winResponse = await axios.put(`${baseUrl}/${game.id}`, wonGame)
  return winResponse.data
}
const gameService = {newGame, updateGame, setWin}

export default gameService