const express = require('express')
const cors = require('cors')
require('express-async-errors')
const mongoose = require('mongoose')
const { MONGODB_URI } = require('./utils/config')
const guessRouter = require('./controllers/guess')
const loginRouter = require('./controllers/login')
const usersRouter = require('./controllers/users')
const codeRouter = require('./controllers/code')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const leaderboardRouter = require('./controllers/leaderboard')
const gameRouter = require('./controllers/games')

const app = express()

logger.info('Connecting to MongoDB', MONGODB_URI)

mongoose
  .set('strictQuery', false)
  .connect(MONGODB_URI)
  .then(() => {
    logger.info('Connected to MongoDB')
  })
  .catch((error) => {
    logger.error(error)
  })

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'))
}

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)
app.use('/api/guess', guessRouter)
app.use('/api/code', codeRouter)
app.use('/api/leaderboard', leaderboardRouter)
app.use('/api/games', gameRouter)

app.use(middleware.errorHandler)

module.exports = app
