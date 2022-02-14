export interface ProductObject {
  id: string;
  name: string;
  brand: string;
  price: number;
  sex: string;
  sizes: sizesInterface[];
  description: string;
  details: string[];
  images: string[];
}

interface sizesInterface {
  size: string;
  stock: number;
}
