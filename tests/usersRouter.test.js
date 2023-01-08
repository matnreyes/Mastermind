const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)
const User = require('../models/user')

// Reset test database before each run
beforeEach(async () => {
  await User.deleteMany({})
})

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

  test('cannot be added if password field empty', async () => {
    const user = {
      username: 'testUser',
      password: ''
    }

    await api
      .post('/api/users')
      .send(user)
      .expect(401)

    const users = await User.find({})

    expect(users.length).toEqual(0)
  })
})
