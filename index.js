const http = require('http')
const app = require('./app')
const logger = require('./utils/logger')

const server = http.createServer(app)

server.listen(8080, () => {
  logger.info('Running on PORT', 8080)
})
