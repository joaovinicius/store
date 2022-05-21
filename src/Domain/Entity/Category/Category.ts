import { TimestampsAndSoftDeletes } from '../../Base'
import { ICategory } from './ICategory'

export class Category extends TimestampsAndSoftDeletes implements ICategory {
  public id: string
  public name: string
  public parentId?: string
  public children?: ICategory[]

  constructor (props: ICategory) {
    super(props)
    this.id = props.id
    this.name = props.name
    this.parentId = props.parentId
    this.children = props.children
  }
}
