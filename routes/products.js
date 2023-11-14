const express = require("express");
const router = express.Router();
const path = require("path");
const allProducts = require("../db/products.json");
const { addProduct, findProduct } = require("../models/product");

const productFile = path.join(process.cwd(), "views", "newProduct.html");

// get all Products Api
router.get("/", (req, res) => {
  res.send(allProducts);
});

// get add Product file
router.get("/add", (req, res) => {
  res.sendFile(productFile);
});

// Dynamic routing (search any product)
router.get("/:p", async (req, res) => {
  const searchProduct = req.params.p;
  const dynamicProduct = await findProduct(searchProduct);
  res.send(dynamicProduct);
});

// post product method or controller
router.post("/", (req, res) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brands,
    category,
    thumbnail,
    images,
  } = req.body;
  addProduct({
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brands,
    category,
    thumbnail,
    images: [images],
  });
  res.status(200).send({ status: 200, message: "Product added sucessfully" });
});

module.exports = router;
