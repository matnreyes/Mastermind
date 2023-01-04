const supertest = require('supertest')
const bcrypt = require('bcrypt')
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

    const verifiedPassword = await bcrypt.compare(user.password, userResponse.body.passwordHash)

    expect(verifiedPassword).toBe(true)
  })
})
