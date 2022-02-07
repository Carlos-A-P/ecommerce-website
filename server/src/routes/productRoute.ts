import { Product } from "../db/db";
import { errorHandler } from "../services/errorHandler";
import { Router } from "express";
import { ProductObject } from "src/models/product";

const FILE_NAME = "productController";

const productRoute = Router();

productRoute.get("/", (_, response) => {
  console.log(`[${FILE_NAME}] - GET Request received. Fetching all items.`);
  Product.find()
    .then(products => {
      if (products) response.json(products);
      else response.status(404).end();
    })
    .catch(error => errorHandler(error, response));
});

productRoute.get("/:id", (request, response) => {
  const id = request.params.id;
  console.log(`[${FILE_NAME}] - GET Request received. Fetching item with id: ${id}`);
  Product.findById(id)
    .then(product => {
      if (product) response.json(product);
      else response.status(404).end();
    })
    .catch(error => errorHandler(error, response));
});

productRoute.get("/search/:name", (request, response) => {
  const name = request.params.name;
  console.log(`[${FILE_NAME}] - GET Request received. Searching for ${name}`);
  Product.find({ name: { $regex: name, $options: "i" } })
    .then(products => {
      console.log(products);
      if (products) response.json(products);
      else response.status(404).end();
    })
    .catch(error => errorHandler(error, response));
});

productRoute.post("/", (request, response) => {
  const product: ProductObject = request.body;
  if (!product) return response.status(400);
  console.log(`[${FILE_NAME}] - POST Request received. New product added`);
  console.log(product);
  const newProduct = new Product({
    name: product.name,
    brand: product.brand,
    price: product.price,
    sex: product.sex,
    sizes: product.sizes,
    description: product.description,
    details: product.details,
  });
  newProduct
    .save()
    .then((result: any) => {
      response.json(result);
    })
    .catch((error: Error) => errorHandler(error, response));
});

productRoute.put("/", (request, response) => {
  const id = request.body.id;
  const product: ProductObject = request.body.product;
  if (id === undefined || !product) return response.status(400);
  console.log(`[${FILE_NAME}] - PUT Request received. Updating id ${id} with value ${product}`);
  Product.findByIdAndUpdate(id, product)
    .then(response => {
      console.log("The response is: ", response);
    })
    .catch(error => errorHandler(error, response));
});

productRoute.delete("/");

export { productRoute };
