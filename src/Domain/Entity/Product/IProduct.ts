export interface IProduct {
  id: string,
  name: string,
  description: string,
  brand: string,
  model: string,
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date
}
