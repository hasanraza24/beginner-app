const mongoose = require('mongoose')

/**
 * Creating a user schema to validate data before inserting into Database
 */
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true //If you don't pass name it will throw error
  },
  email: {
    type: String,
    required: true,
    unique: true //Email must be unique in every document
  },
  password: {
    type: String,
    required: true
  }
})

/**
 * This will create a collection in Named User in MongoDB
 */

const User = mongoose.model('User', userSchema)

/**
 * Exporting User object to require it in other file
 */

module.exports = User;