const express = require("express");
const router = express.Router();
const users = require("../db/user.json");
const { createUser } = require("../controllers/auth");

// get all user Api
router.get("/", (req, res) => {
  res.send(users);
});

// user Create controller
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await createUser(firstName, lastName, email, password);
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err)
  }
});
module.exports = router;
