require("dotenv").config();
const mongoose = require("mongoose");
const api_key = require("./config/config");

var mongoURL = api_key.mongo_DATABASE;

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log(`Mongodb connection successful`);
});

db.on("error", () => {
  console.log(`Mongodb connection failed`);
});

module.exports = mongoose;
