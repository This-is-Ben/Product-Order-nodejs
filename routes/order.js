const express = require("express");
const orderRouter = express.Router();

orderRouter.get("/", (req, res) => {
  res.status(200).json({
    message: "Handling Get orders",
  });
});

orderRouter.post("/", (req, res) => {
  const order = {
    id: req.body.id,
    quantity: req.body.quantity,
  };

  res.status(200).json({
    message: "Order created !",
    order: order,
  });
});

orderRouter.get("/:orderId", (req, res) => {
  const id = req.params.orderId;
  res.status(200).json({
    message: "Retrieved order",
    id: id,
  });
});

orderRouter.delete("/:orderId", (req, res) => {
  res.status(200).json({
    message: "Deleted order",
  });
});

module.exports = orderRouter;
