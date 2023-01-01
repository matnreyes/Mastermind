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
  if (error.name === 'InvalidGuessLength') {
    return res.status(400).json({ error: error.message })
  }
  if (error.name === 'GameOver') {
    return res.status(403).json({ error: error.message })
  }

  next(error)
}

module.exports = { requestLogger, errorHandler }
