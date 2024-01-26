export interface ICategory {
  id?: number
  name: string
  parent?: ICategory
  children?: ICategory[]
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}
