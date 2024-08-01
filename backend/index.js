const express = require("express");
const app = express();
const cors = require("cors");
const products = require("./product.js");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
