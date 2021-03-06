const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
});

module.exports = mongoose.model("Order", orderSchema);
