const express = require("express");
const router = express.Router();
const { createUser, loginUser } = require("../controllers/user");

// user CreateUser Controller
router.post("/signup",  async (req, res) => {
  try{
    const {name, email, phone, password} = req.body;
    const response = await createUser({name, email, phone, password});
   return res.status(200).send({status:200, message: response});
  }catch(err){
   return res.status(400).send({status:400, message:err.message});
  }
});

// user LoginUser Controller
router.post("/login",  async (req, res) => {
  try{
    const { email, password} = req.body;
    const response = await loginUser({email, password});
   return res.status(200).send({status:200, user: response});
  }catch(err){
   return res.status(400).send({status:400, message:err.message});
  }
});
module.exports = router;
