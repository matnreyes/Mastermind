const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

describe('new user', () => {
  test('can be added with right parameter', async () => {
    const user = {
      username: 'testUser',
      password: 'testPassword'
    }

    const userResponse = await api
      .post('/api/users')
      .send(user)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    expect(userResponse.body.username).toEqual(user.username)
  })
})
