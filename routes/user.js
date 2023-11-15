const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/user");

// user Create Controller
router.post("/",  async (req, res) => {
  try{
    const {name, email, phone, password} = req.body;
    const response = await createUser({name, email, phone, password});
   return res.status(200).send({status:200, message: response});
  }catch(err){
   return res.status(400).send({status:400, message:err.message});
  }
});
module.exports = router;
