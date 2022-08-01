export interface ICategory {
  id: string
  name: string
  parent?: ICategory
  children?: ICategory[]
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}
