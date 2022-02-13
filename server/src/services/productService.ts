import { ProductObject } from "../models/product";

const areFieldsMissing = (product: ProductObject): boolean => {
  // return Object.values(product).every(property => property)
  for (let objectKey of Object.keys(product)) {
    if (objectKey === "id") continue;
    if (!product[objectKey as keyof ProductObject]) return true;
  }
  return false;
};

export { areFieldsMissing };
