const requestLogger = (req, res, next) => {
  console.log('METHOD: ', req.method)
  console.log('PATH: ', req.path)
  console.log('BODY', req.body)
  console.log('------')
  next()
}

module.exports = { requestLogger }
