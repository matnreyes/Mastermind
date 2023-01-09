const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)
const User = require('../models/user')

// Reset database by deleting all entries and creating a new user
beforeEach(async () => {
  await User.deleteMany({})

  const user = {
    username: 'testUser',
    password: 'testPassword'
  }

  await api
    .post('/api/users')
    .send(user)
})

describe('user login', () => {
  test('works flawlessly when all information is correct', async () => {
    const user = {
      username: 'testUser',
      password: 'testPassword'
    }

    const loginResponse = await api
      .post('/api/login')
      .send(user)
      .expect(200)

    expect(loginResponse.body.token).toBeDefined()
    expect(loginResponse.body.user.username).toEqual(user.username)
  })

  test('fails with 401 status if credentials are invalid', async () => {
    const failedUser = {
      username: 'testUser',
      password: 'wrongPassword'
    }

    const failedResponse = await api
      .post('/api/login')
      .send(failedUser)
      .expect(401)

    expect(failedResponse.body.token).toEqual(undefined)
    expect(failedResponse.body.error).toContain('Invalid username or password')
  })
})
