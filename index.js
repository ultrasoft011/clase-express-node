import express from "express";
import Products from "./products.js";
const app = express();
const port = 3000;

// GET

app.get("/", (req, res) => {
  // res.send("Hello Node WORLD");
  res.json(Products);
});

app.listen(port, () => {
  console.log("Listening in port " + port);
});
