const User = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// REGISTER USER
exports.registerUser = async (req, res) => {

  try {

    const { username, email, password } = req.body

    const user = new User({
      username,
      email,
      password
    })

    await user.save()

    res.status(201).json({
      success: true,
      message: "User registered successfully"
    })

  } catch (error) {

    res.status(500).json({ error: error.message })

  }

}



/*
TASK 2

Complete the login authentication logic.

Steps:
1. Compare password using bcrypt.compare()
2. Create JWT payload containing id and username
3. Generate token using jwt.sign()
4. Return response containing token and user data
*/

exports.loginUser = async (req, res) => {

  try {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      })
    }

    // TODO: Compare password

    // TODO: Create JWT payload

    // TODO: Generate JWT token

    // TODO: Send success response

  } catch (error) {

    res.status(500).json({ error: error.message })

  }

}
