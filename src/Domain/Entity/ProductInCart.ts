import { ProductInStock } from "./ProductInStock";

export interface ProductInCart {
  id: string,
  quantity: number,
  product: ProductInStock,
  note: string
}
