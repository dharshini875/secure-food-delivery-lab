require("dotenv").config()
const mongoose = require("mongoose")
const Order = require("../models/order.model")

async function seedOrders() {

  try {

    await mongoose.connect(process.env.MONGO_URI)

    console.log("MongoDB connected")

    await Order.deleteMany()

    console.log("Existing orders removed")

    let bulk = []

    const restaurants = [
      "PizzaHub",
      "BurgerTown",
      "SushiBar",
      "TacoPoint",
      "CurryHouse"
    ]

    const categories = [
      "Veg",
      "Non-Veg",
      "Dessert",
      "Beverage",
      "FastFood"
    ]

    for (let i = 1; i <= 3000; i++) {

      bulk.push({

        orderId: "ORD" + i,

        customerId: Math.floor(Math.random() * 1000),

        restaurant: restaurants[i % restaurants.length],

        category: categories[i % categories.length],

        amount: Math.floor(Math.random() * 800) + 100,

        status: i % 3 === 0 ? "delivered" : "preparing",

        orderDate: new Date(2024, 3, (i % 28) + 1)

      })

    }

    await Order.insertMany(bulk)

    console.log("3000 orders inserted successfully")

    process.exit()

  } catch (error) {

    console.error(error)

    process.exit(1)

  }

}

seedOrders()
