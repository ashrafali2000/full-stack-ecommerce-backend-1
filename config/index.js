const mongoose = require("mongoose");
require('dotenv').config()
const password = process.env.PASSWORD
 mongoose.connect(`mongodb+srv://Ashrafali:${password}@ashratech.fbnrqrf.mongodb.net/full-stack-Ecommerce-Backend-1?retryWrites=true&w=majority`)
module.exports = mongoose