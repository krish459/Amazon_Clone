const mongoose = require("mongoose");
const ItemSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require,
    },
    description: {
      type: String,
      require,
    },
    price: {
      type: Number,
      require,
    },
    image: {
      type: String,
      require,
    },
    alt: {
      type: String,
      require,
    },
    type: {
      type: String,
      require,
    },
  },
  {
    timestamps: true,
  }
);

const ItemModel = mongoose.model("item", ItemSchema);

module.exports = ItemModel;
