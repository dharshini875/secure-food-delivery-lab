require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

const { registerUser, loginUser } = require("./controllers/auth.controller")
const { getDashboard } = require("./controllers/analytics.controller")

const app = express()

app.use(express.json())

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err))


// AUTH ROUTES
app.post("/api/auth/register", registerUser)
app.post("/api/auth/login", loginUser)


// ANALYTICS ROUTE
app.get("/api/admin/dashboard", getDashboard)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
