const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

describe('Guess is checked', () => {
  test('and has all the same number', async () => {
    const secretCode = [1, 2, 3, 4]
    const guess = [1, 1, 1, 1]

    const guessResponse = await api
      .post('/api/guess')
      .send({ secretCode, guess })
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const results = guessResponse.body

    expect(results.location).toEqual(1)
    expect(results.digit).toEqual(1)
  })
})
