const mongoose = require("mongoose");
require('dotenv').config()
const password = process.env.DB_URI
 mongoose.connect(password)
module.exports = mongoose
