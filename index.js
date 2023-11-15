const express = require("express");
// const bodyParser = require("body-parser")
const cors = require('cors');
const indexRoute = require("./routes/index");
const product = require("./routes/products");
const signUp = require("./routes/signUp");
const signIn = require("./routes/signIn");
const user = require("./routes/user");
const mongoose = require("./config/index")

const app = express();
const path = require("path");
// const signInjs = ;
app.use(cors());
const port = 8000;

// app.use(bodyParser.urlencoded({extends:false}))
app.use(express.json());

app.use(express.static(path.join(process.cwd(), "public")))


// Controller
// app.use("/", indexRoute);


// Products MiddleWare
// app.use("/products", product);

// Users MiddleWare
app.use("/", user);

// SignIn MiddleWare
// app.use("/login", signIn);

// db CONNECTION
const db = mongoose.connection;
db.on("error",console.error.bind( console, "Connection Error"));
db.once("open", function (){
  console.log("db Connected");
})

app.listen(port, (req, res) => {
  console.log(`Server listen on Port ${port}`);
});
