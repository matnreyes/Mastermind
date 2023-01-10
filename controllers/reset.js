const resetRouter = require('express').Router()
const User = require('../models/user')
const Game = require('../models/game')
const logger = require('../utils/logger')

resetRouter.delete('/', async (req, res) => {
  await User.deleteMany({})
  await Game.deleteMany({})

  logger.info('Au revoir database')
  res.status(204)
})

module.exports = resetRouter
