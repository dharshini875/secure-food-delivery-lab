const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }
})

/*
TASK 1

Implement password hashing using bcrypt.

Requirements:
- Use bcryptjs
- Use mongoose pre("save") hook
- Hash password only if modified
- Use 10 salt rounds
*/

const User = mongoose.model("User", userSchema)

module.exports = User
