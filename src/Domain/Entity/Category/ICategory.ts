export interface ICategory {
  id: string,
  name: string,
  parentId?: string,
  children?: ICategory[],
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date
}
