/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/user')
const Game = require('../models/game')

const api = supertest(app)

let user = 0

beforeEach(async () => {
  await User.deleteMany({})
  await Game.deleteMany({})

  const player = new User({
    username: 'testUsername',
    password: 'password'
  })
  const savedUser = await player.save()
  const JSONuser = JSON.stringify(savedUser)
  user = JSON.parse(JSONuser)
})

describe('starting game', () => {
  test('works when all parameters are met', async () => {
    const userId = user.id
    const difficulty = 5
    const secretCode = [8, 1, 3, 4, 5]

    const gameResponse = await api
      .post('/api/games')
      .send({ userId, difficulty, secretCode })
      .expect(201)
      .expect('Content-Type', /application\/json/)

    expect(gameResponse.body.difficulty).toEqual(difficulty)
    expect(gameResponse.body.tries).toEqual(0)
    expect(gameResponse.body.finished).toEqual(false)
    expect(gameResponse.body.secretCode).toHaveLength(difficulty)
  })
})

describe('updating game', () => {
  test('works', async () => {
    const newGame = new Game({
      user: user.id,
      difficulty: 5,
      secretCode: [1, 1, 1, 1]
    })

    const savedGame = await newGame.save()
    savedGame.id = savedGame._id.toString()

    const game = {
      finished: true,
      won: true,
      tries: 6,
      secretCode: [4, 5, 6, 7]
    }

    const updatedGame = await api
      .put(`/api/games/${savedGame.id}`)
      .send(game)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(updatedGame.body.tries).toEqual(game.tries)
    expect(updatedGame.body.secretCode).toEqual(newGame.secretCode)
    expect(updatedGame.body.finished).toEqual(true)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
