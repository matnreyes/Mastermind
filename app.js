const express = require('express')
const guessRouter = require('./controllers/guess')

const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/api/guess', guessRouter)

module.exports = app
