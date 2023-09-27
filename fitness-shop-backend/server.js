//server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { getFormattedFilenames } = require('./fileHandler');

const app = express();
const PORT = 5000;

const DATABASE_NAME = 'test';
mongoose.connect(`mongodb://0.0.0.0:27017/${DATABASE_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

db.once('open', () => {
  console.log('Successfully connected to MongoDB!');
});

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: String,
  image: String,
});

const Product = mongoose.model('Product', productSchema);

app.use(cors());
app.use(express.json());

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send({ message: 'Error fetching products.' });
  }
});

app.get('/saveFilenamesToDb', async (req, res) => {
  const formattedNames = getFormattedFilenames();

  console.log('Formatted names:', formattedNames); // This will log the names to the console

  try {
    for (const name of formattedNames) {
      const existingProduct = await Product.findOne({ name: name });
      if (!existingProduct) {
        const newProduct = new Product({ name: name });
        await newProduct.save();
      }
    }
    res.send({ message: 'Names saved successfully' });
  } catch (err) {
    console.error('Error while saving names to DB:', err);
    res.status(500).send({ message: 'Error saving names to database.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
