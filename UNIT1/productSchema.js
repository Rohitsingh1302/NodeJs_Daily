const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
    
});

module.exports = mongoose.model('products', productSchema);
require("./config");
const express = require("express");
const Product = require("./product");

const app = express();
app.use(express.json());

app.post("/create", async (req, res) => {
  const data = new Product(req.body);
  const result = await data.save();
  res.send(result);
});

app.get("/list", async (req, res) => {
  const data = await Product.find();
  res.send(data);
});

app.listen(5000);