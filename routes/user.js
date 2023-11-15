const express = require("express");
const router = express.Router();
const User = require("../models/user")

// user Create Controller
router.post("/",  async(req, res) => {
  try{
    const user = new User(req.body);
    await user.save()
     return res.status(200).send({status:200, message:"success"});
  }catch(err){
   return res.status(400).send({status:400, message: err.message})
  }
});
module.exports = router;
