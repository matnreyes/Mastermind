/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/user')
const Game = require('../models/game')

const api = supertest(app)

let user = 0
let token = 0

beforeEach(async () => {
  await User.deleteMany({})
  await Game.deleteMany({})

  const player = {
    username: 'testUsername',
    password: 'password'
  }

  const newUser = await api
    .post('/api/users')
    .send(player)

  user = newUser.body

  const loggedIn = await api
    .post('/api/login')
    .send(player)

  token = `bearer ${loggedIn.body.token}`
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

    savedGame.finished = true
    savedGame.won = true
    savedGame.tries = 6
    savedGame.secretCode = [4, 5, 6, 7]

    const updatedGame = await api
      .put(`/api/games/${savedGame.id}`)
      .send(savedGame._doc)
      .set('authorization', token)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(updatedGame.body.tries).toEqual(savedGame.tries)
    expect(updatedGame.body.secretCode).toEqual(['1', '1', '1', '1'])
    expect(updatedGame.body.finished).toEqual(true)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
