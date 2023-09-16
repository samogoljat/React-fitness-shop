const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

mongoose.connect("mongodb://localhost/fitnessShopDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
