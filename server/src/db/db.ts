import mongoose from "mongoose";
import * as dotenv from "dotenv";

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
});

productSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Product = mongoose.model("Product", productSchema);

export { Product };
