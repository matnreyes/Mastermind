const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

describe('randomAPI', () => {
  test('send a list matching difficulty specs', async () => {
    const easyCode = await api.get('/api/code/4')

    expect(easyCode.body).toHaveLength(4)

    const hardCode = await api.get('/api/code/6')
    expect(hardCode.body).toHaveLength(6)
  })

  test('does not send anything if difficulty not in range of 4 to 6', async () => {
    const invalidCode = await api.get('/api/code/7')

    expect(invalidCode.body.error).toContain('Difficulty must be within range of 4 to 6')
  })
})
