var express = require("express");
var router = express.Router();
var product = require("../models/products");
const isAdmin = (req, res, next) => {
  if (req.session.isAdmin) {
    next();
  } else {
    res.status(500).json("not authenticated");
  }
};
/* Post product. */
router.post("/", async function (req, res) {
  const newProduct = new product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* get single product. */
router.get("/:id", async function (req, res) {
  try {
    const singleProduct = await product.findById(req.params.id);
    res.status(200).json(singleProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all products
router.get("/", async function (req, res) {
  try {
    const allProduct = await product.find();
    res.status(200).json(allProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a product
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await product.findById(req.params.id);
    if (deletedProduct.id === req.params.id) {
      await deletedProduct.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("You can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
