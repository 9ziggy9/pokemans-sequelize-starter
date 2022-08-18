require("dotenv").config();
const express = require("express");
const app = express();
    
const {PORT} = process.env;

app.get('/', (req, res) => {
  console.log("Received requeste");
  return res.json({
    hello: "world",
  });
});

app.listen(PORT, () => {
  console.log("Hello, from", PORT);
});
