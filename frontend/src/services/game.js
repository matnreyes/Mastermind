import axios from 'axios'

const baseUrl = '/api/games'

const newGame = async (difficulty, secretCode, userId) => {
  const gameResponse = await axios.post(baseUrl, {difficulty, secretCode, userId})
  return gameResponse.data
}

const updateGame = async (game, update) => {
  console.log(update)
  const gameResponse = await axios.put(`${baseUrl}/${game.id}`, update)
  return gameResponse.data
}
const gameService = {newGame, updateGame}

export default gameService