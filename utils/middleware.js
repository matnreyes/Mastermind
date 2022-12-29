const requestLogger = (req, res, next) => {
  console.log('METHOD: ', req.method)
  console.log('PATH: ', req.path)
  console.log('BODY', req.body)
  console.log('------')
  next()
}

const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name === 'InvalidDifficulty ') {
    return res.status(400).send({ error: 'Difficulty should be between 4 and 6'})
  }
  if (error.name === 'ValidationError') {
    return res.status(400).send({ error: error.message})
  }

  next(error)
}

module.exports = { requestLogger, errorHandler }
