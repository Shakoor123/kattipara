const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    thikness: {
      type: Number,
    },
    size: {
      type: Number,
    },
    img: {
      type: String,
    },
    mani: {
      type: Boolean,
    },
    weight: {
      type: Number,
    },
    foreign: {
      type: Boolean,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
