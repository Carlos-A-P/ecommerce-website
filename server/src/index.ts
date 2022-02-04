import express from "express";

const PORT = 3022;
const app = express();

const items = [
  {
    id: 1,
    name: "Plain Shirt",
    cagetory: "Apparel",
  },
  {
    id: 2,
    name: "Computer",
    cagetory: "Electronics",
  },
  {
    id: 3,
    name: "Mango",
    cagetory: "Food",
  },
];

app.get("/items", (request, response) => {
  response.json(items);
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
