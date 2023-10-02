// fitness-shop-backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 5000;

mongoose.connect(process.env.ATLAS_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

db.once('open', () => {
  console.log('Successfully connected to MongoDB!');

  const GYM_DIR = path.join(
    __dirname,
    '..',
    'fitness-shop-frontend',
    'src',
    'assets',
    'gym'
  );

  fs.readdir(GYM_DIR, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    const formattedNames = files.map((file) => {
      const fileNameWithoutExt = path.basename(file, path.extname(file));
      const formattedName = fileNameWithoutExt
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return formattedName;
    });

    // console.log('Formatted names:', formattedNames);
  });
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

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
