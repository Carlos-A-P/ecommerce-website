import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { transformProductReturned } from "../services/dbService";

dotenv.config();

const url: string | undefined = process.env.DB_URI;

if (url === undefined) {
  console.log("Cannot establish connection with database.");
  process.exit(1);
}

mongoose.connect(url);

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  sex: String,
  sizes: [{ size: String, stock: Number }],
  description: String,
  details: [String],
  images: [String],
});

productSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    transformProductReturned(returnedObject);
  },
});

const Product = mongoose.model("Product", productSchema);

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  phone: String,
  password: String,
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    transformProductReturned(returnedObject);
  },
});

const User = mongoose.model("User", userSchema);

const cartSchema = new mongoose.Schema({
  productInfo: [{ productId: mongoose.Types.ObjectId, quantity: Number }],
  userId: mongoose.Types.ObjectId,
  totalPrice: Number,
});

cartSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    transformProductReturned(returnedObject);
  },
});

const Cart = mongoose.model("Cart", cartSchema);

export { Product, User, Cart };
