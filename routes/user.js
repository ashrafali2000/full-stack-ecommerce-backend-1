const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/user");

// user Create Controller
router.post("/",  async (req, res) => {
  try{
    const response = await createUser(req.body);
   return res.status(200).send({status:200, message: response});
  }catch(err){
   return res.status(400).send({status:400, message:err.message});
  }
});
module.exports = router;
