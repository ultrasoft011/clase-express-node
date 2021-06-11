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

// POST
// Any action that requires creation of a resource. E.g: Creating a new user account, new order.
// Can allow data to be sent along with in a form of a request body. Are a type of HTTP message that is sent by the client to the server

app.post("/", (req, res) => {
  const food = req.body;
  data.push(food);
  res.send("POST request to the homepage");
});

app.listen(port, () => {
  console.log("Listening in port " + port);
});
