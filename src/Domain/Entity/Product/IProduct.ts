export interface IProduct {
  id?: number,
  name: string,
  description: string,
  brand: string,
  model: string,
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date
}
