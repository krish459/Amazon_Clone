const express = require("express");
const router = express.Router();
const Item = require("../models/ItemModel");

router.get("/getallitems", async (req, res) => {
  try {
    const items = await Item.find({});
    res.send(items);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/additem", async (req, res) => {
  const { title, description, price, image, alt, type } = req.body;

  const newItem = new Item({ title, description, price, image, alt, type });
  try {
    newItem.save();
    res.send("Item added successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
