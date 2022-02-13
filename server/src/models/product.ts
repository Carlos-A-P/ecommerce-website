export interface ProductObject {
  id: string;
  name: string;
  brand: string;
  price: number;
  sex: number;
  sizes: sizesInterface[];
  description: string;
  details: string[];
  images: string[];
}

interface sizesInterface {
  size: string;
  stock: number;
}
