const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

let game = 0
let user = 0
const secretCode = [1, 2, 3, 4]

beforeAll(async () => {
  const newPlayer = {
    username: 'testUser',
    password: 'passwordd'
  }

  const userResponse = await api
    .post('/api/users')
    .send(newPlayer)

  user = userResponse.body

  const gameResponse = await api
    .post('/api/games')
    .send({ difficulty: 4, secretCode, userId: user.id })
    .expect('Content-Type', /application\/json/)

  game = gameResponse.body
})

describe('guess is checked', () => {
  test('and fails if guess is larger than code', async () => {
    const guess = [1, 2, 3, 4, 5, 6]
    const guessResponse = await api
      .post('/api/guess')
      .send({ secretCode, guess, game })
      .expect(400)
      .expect('Content-Type', /application\/json/)

    const results = guessResponse.body
    expect(results.error).toContain('Guess is too long')
  })

  test('and has all the same number', async () => {
    const guess = [1, 1, 1, 1]

    const guessResponse = await api
      .post('/api/guess')
      .send({ secretCode, guess, game })
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const results = guessResponse.body

    expect(results.location).toEqual(1)
    expect(results.digit).toEqual(1)
  })

  test('and has no correct guesses', async () => {
    const guess = [5, 6, 7, 0]

    const guessResponse = await api
      .post('/api/guess')
      .send({ secretCode, guess, game })
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const results = guessResponse.body
    expect(results.location).toEqual(0)
    expect(results.digit).toEqual(0)
  })

  test('and all numbers are right but wrong place', async () => {
    const guess = [4, 3, 2, 1]

    const guessResponse = await api
      .post('/api/guess')
      .send({ secretCode, guess, game })
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const results = guessResponse.body
    expect(results.location).toEqual(0)
    expect(results.digit).toEqual(4)
  })

  test('and all numbers are correct and in the right location', async () => {
    const guess = [1, 2, 3, 4]

    const guessResponse = await api
      .post('/api/guess')
      .send({ secretCode, guess, game })
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const results = guessResponse.body
    expect(results.location).toEqual(4)
    expect(results.digit).toEqual(4)
  })

  test('and has values out of range', async () => {
    const guess = [-1, 3, 5, 3]

    const guessResponse = await api
      .post('/api/guess')
      .send({ secretCode, guess, game })
      .expect(400)

    expect(guessResponse.body.error).toContain('Guess must be within range of 0 to 7')
  })
})

afterAll(async () => {
  await api
    .post('/api/burnitdown')
})
