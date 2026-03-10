const Order = require("../models/order.model")

/*
TASK 3

Create a MongoDB aggregation pipeline that returns
dashboard analytics.

Requirements:

- Use $match to filter delivered orders
- Use $lookup to join with users collection
- Use $facet to return:

  1. totalRevenue
  2. topRestaurants (top 5 by revenue)
  3. categoryRevenue

- Use $group, $sort, and $limit where appropriate
*/

exports.getDashboard = async (req, res) => {

  try {

    // TODO: Implement aggregation pipeline

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }

}
