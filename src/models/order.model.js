/** Do not modify this file **/

const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
  orderId: String,
  customerId: Number,
  restaurant: String,
  category: String,
  amount: Number,
  status: String,
  orderDate: Date
})

module.exports = mongoose.model("Order", orderSchema)

