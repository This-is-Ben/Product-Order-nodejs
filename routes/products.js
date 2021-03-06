const express = require("express");
const Product = require("../models/product");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

productRouter.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  console.log(product);

  //   try {
  //     const createdProduct = await product.save();
  //     console.log("Product is:" + product);
  //     res.status(200).json(createdProduct);
  //   } catch (err) {
  //     res.status(500).json({ error: err });
  //   }

  product
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST request to /products",
        createdProduct: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

productRouter.get("/:productId", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err });
  }

  //   const id = req.params.productId;
  //   Product.findById(id)
  //     .exec()
  //     .then((doc) => {
  //       console.log(doc);
  //       res.status(200).json(doc);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(500).json({ error: err });
  //     });
});

productRouter.patch("/:productId", async (req, res) => {
  try {
    const updateProduct = await Product.updateOne(
      { _id: req.params.productId },
      { $set: { price: req.body.price } }
    );
    res.json(updateProduct);
  } catch (err) {
    res.status(500).json({ error: err });
    //res.status(400).send(err);
  }
});

productRouter.delete("/:productId", async (req, res) => {
  try {
    const deletedProduct = await Product.deleteOne({
      _id: req.params.productId,
    });
    res.status(200).json(deletedProduct);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = productRouter;
