require('dotenv').config()

const PORT = process.env.PORT || 8080
const { MONGODB_URI } = process.env

module.exports = { PORT, MONGODB_URI }
