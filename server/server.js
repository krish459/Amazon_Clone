require("dotenv").config();
const express = require("express");
const db = require("./db");

const app = express();

const itemroute = require("./routes/itemRoute");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server working heer");
});
app.use("/items/", itemroute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
