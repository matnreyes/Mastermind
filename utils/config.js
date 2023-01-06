require('dotenv').config()

const PORT = process.env.PORT || 8080
const MONGODB_URI = process.env.NODE_ENV === 'test' ? process.env.TESTMONGODB_URI : process.env.MONGODB_URI

module.exports = { PORT, MONGODB_URI }
