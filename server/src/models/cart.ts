export interface cart {
  id: string;
  productInfo: productInfo[];
  userId: string;
  totalPrice: number;
}

export interface productInfo {
  productId: string;
  quantity: number;
}
