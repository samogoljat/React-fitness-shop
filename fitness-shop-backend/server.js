const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// MongoDB connection
const DATABASE_NAME = 'test'; // Replace 'mydatabase' with your desired database name
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

app.use(cors());
app.use(express.json());

//route
app.get('/home', (req, res) => {
  res.send('<h1>Welcome to Fitness HomeSite</h1>')  
})
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Fitness HomeSite</h1>')  
})

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

