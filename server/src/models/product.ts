export interface ProductObject {
  id: number;
  name: string;
  brand: string;
  price: number;
  sex: number;
  sizes: sizesInterface[];
  description: string;
  details: string[];
}

interface sizesInterface {
  size: string;
  stock: number;
}
