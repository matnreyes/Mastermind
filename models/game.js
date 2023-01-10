/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  tries: {
    type: Number,
    default: 0
  },
  difficulty: {
    type: Number,
    default: 4
  },
  won: {
    type: Boolean,
    default: false
  },
  finished: {
    type: Boolean,
    default: false
  },
  startTime: Object,
  endTime: Object,
  secretCode: [{
    type: String
  }],
  gameTime: Object,
  guesses: {
    type: Array
  },
  results: {
    type: Array
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

gameSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Game', gameSchema)
