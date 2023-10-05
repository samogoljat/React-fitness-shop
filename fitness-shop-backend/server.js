// fitness-shop-backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Import local JSON data
const products = require('./test_products.json');

app.use(cors());
app.use(express.json());

// Serve product data on a GET request to '/products'
app.get('/products', (req, res) => {
  try {
    res.json(products);
  } catch (err) {
    res.status(500).send({ message: 'Error fetching products.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});