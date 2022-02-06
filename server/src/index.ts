import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { Product } from "./db/db";
import { errorHandler } from "./services/errorHandler";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/store/products", (request, response) => {
  Product.find()
    .then(products => {
      if (products && products.length) response.json(products);
      else response.status(404).end();
    })
    .catch(error => {
      errorHandler(error, response);
    });
});

app.get("/store/product/:id", (request, response) => {
  const id = request.params.id;
  Product.findById(id)
    .then(product => {
      if (product) response.json(product);
      else response.status(404).end();
    })
    .catch(error => {
      errorHandler(error, response);
    });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
