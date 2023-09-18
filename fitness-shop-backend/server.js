//server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

const DATABASE_NAME = 'test';
mongoose.connect(`mongodb://0.0.0.0:27017/${DATABASE_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error("Error connecting to MongoDB:", error);
});

db.once('open', () => {
  console.log("Successfully connected to MongoDB!");
});

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: String,
  image: String
});

const Product = mongoose.model('Product', productSchema);

app.use(cors());
app.use(express.json());

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send({ message: "Error fetching products." });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
