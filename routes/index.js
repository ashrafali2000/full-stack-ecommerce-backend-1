const express = require("express");
const router = express.Router();
const path = require("path");
const prodcutsFile = path.join(process.cwd(), "views", "products.html");

// router.get("/", (req, res) => {
// // res.send("Hello from  Controller")
// res.send(req.body)
// })

// Dynamic route
// router.get("/:categories", (req, res) => {
// res.send(req.params.categories)
// })

router.get("/", (req, res) => {
  res.sendFile(prodcutsFile);
});

module.exports = router;
