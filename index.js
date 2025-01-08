const express = require("express");
const chalk = require("chalk")
const cors = require('cors');
const product = require("./routes/products");
const user = require("./routes/user");
const mongoose = require("mongoose");
// const mongoose = require("./config/index")
const app = express();
app.use(cors());
const port = 8000;
app.use(express.json());
// const bodyParser = require("body-parser")
// app.use(bodyParser.urlencoded({extends:false}))
// const path = require("path");
// app.use(express.static(path.join(process.cwd(), "public")))
// db CONNECTION
// const db = mongoose.connection;
// db.on("error",console.error.bind( console, "Connection Error"));
// db.once("open", function (){
//   console.log(chalk.bgGreen("db Connected"));
// })
const DB_URI = process.env.DB_URI;
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("DataBase is connected--->");
  })
  .catch((err) => {
    console.log("err------>", err);
  });
app.get("/", (req, res) => {
  res.send("Server is running....");
});
// Products MiddleWare
app.use("/products", product);
// Users MiddleWare
app.use("/user", user);
app.listen(port, (req, res) => {
  console.log(`Server listen on Port ${port}`);
});
