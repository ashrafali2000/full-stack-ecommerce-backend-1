const express = require("express");
// const bodyParser = require("body-parser")
const cors = require('cors');
const indexRoute = require("./routes/index");
const product = require("./routes/products");
const signUp = require("./routes/signUp");
const signIn = require("./routes/signIn");
const user = require("./routes/user");

const app = express();
const path = require("path");
// const signInjs = ;
app.use(cors());
const port = 8000;

// app.use(bodyParser.urlencoded({extends:false}))
app.use(express.json());

app.use(express.static(path.join(process.cwd(), "public")))

// MidddleWare
// app.use("/index", (req, res, nex) => {
//   req.body = "hello body ";
//   nex();
//   // res.send("Hello from middlerWare")
// });
// app.get("/products", poroducts);
// app.get("/prodcuts", (req, res, next) => {
//   res.send(poroducts)
//   next()
// })

// Controller
app.use("/", indexRoute);

// Query
// app.get("/search", (req, res) => {
//     const {q} =  req.query;
//     if(!q) {
//      res.send("Data not Found")
//     }else{
//     res.send(q)
//     }
//  })

// Products MiddleWare
app.use("/products", product);

// Users MiddleWare
app.use("/signup", user);

// User created  MiddleWare
// app.use("/users", user);

// SignUp MiddleWare
// app.use("/signup", signUp);

// SignIn MiddleWare
app.use("/login", signIn);

app.listen(port, (req, res) => {
  console.log(`Server listen on Port ${port}`);
});
