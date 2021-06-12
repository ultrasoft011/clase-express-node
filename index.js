import express from "express";
// import Products from "./products.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

const data = [
  {
    id: 1,
    name: "Rice",
  },
  {
    id: 2,
    name: "Cookies",
  },
  {
    id: 3,
    name: "Pasta",
  },
];

// GET

app.get("/", (req, res) => {
  // res.send("Hello Node WORLD");
  res.json(data);
});

app.get("/data", (req, res) => {
  res.status(200).send(data);
});

// PUT

app.put('/', function (req, res) {
  res.send('Information to put')
})