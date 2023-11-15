const express = require("express");
const router = express.Router();
// const users = require("../db/user.json");
// const { createUser } = require("../controllers/auth");

// get all user Api
// router.get("/", (req, res) => {
//   res.send(users);
// });

// user Create Controller
router.post("/",  (req, res) => {
 
    const { firstName, lastName, email, password } = req.body;
   
    // res.status(200).send(user);
    console.log("req---->", req.body)
    res.status(200).send({message:"success"});
});
module.exports = router;
