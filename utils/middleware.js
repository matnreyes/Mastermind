/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
const logger = require('./logger')

const requestLogger = (req, res, next) => {
  logger.info('METHOD: ', req.method)
  logger.info('PATH: ', req.path)
  logger.info('BODY: ', req.body)
  logger.info('--------')
  next()
}

const errorHandler = (error, req, res, next) => {
  logger.error(error.message)

  if (error.name === 'InvalidDifficulty') {
    return res.status(400).json({ error: error.message })
  }
  if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }
  if (error.name === 'InvalidGuessLength' || error.name === 'InvalidGuessRange') {
    return res.status(400).json({ error: error.message })
  }
  if (error.name === 'GameOver') {
    return res.status(403).json({ error: error.message })
  }
  if (error.name === 'APIUnreacheable') {
    // Generate random numbers offline
    logger.info('API cannot be reached, generating code')
    const { difficulty } = error
    const code = []
    for (let i = 0; i < difficulty; i++) {
      code.push((Math.floor(Math.random() * 8)).toString())
    }
    res.json(code)
  }
  if (error.name === 'InvalidCredentials' || error.name === 'MissingCredentials') {
    return res.status(401).json({ error: error.message })
  }

  next(error)
}

module.exports = { requestLogger, errorHandler }
