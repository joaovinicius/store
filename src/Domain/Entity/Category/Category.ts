import { ICategory } from './ICategory'

export class Category implements ICategory {
  public id?: number
  public name: string
  public parent?: Category
  public children?: ICategory[]
  public createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date

  constructor(props: ICategory) {
    this.id = props.id
    this.name = props.name
    this.parent = props.parent
    this.children = props.children
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}
