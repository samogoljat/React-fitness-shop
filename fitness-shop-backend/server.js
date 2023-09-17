//server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// MongoDB connection
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

// Define a schema and model for your products
const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: String,
  image: String
});

const Product = mongoose.model('Product', productSchema, 'products');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/home', (req, res) => {
  res.send('<h1>Welcome to Fitness HomeSite</h1>');
});

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Fitness HomeSite</h1>');
});

// Create an endpoint to fetch the products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    console.log("Fetched products:", products); // Logging the fetched products
    res.json(products);
  } catch (err) {
    console.error("Error fetching products from the database:", err); // Logging the error if there's any
    res.status(500).send({ message: "Error fetching products." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
