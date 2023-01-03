const express = require('express')
const cors = require('cors')
require('express-async-errors')
const guessRouter = require('./controllers/guess')
const codeRouter = require('./controllers/code')
const middleware = require('./utils/middleware')

const app = express()

app.use(express.static('build'))

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/guess', guessRouter)
app.use('/api/code', codeRouter)

app.use(middleware.errorHandler)

module.exports = app
