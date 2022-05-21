import { IUser } from '../../Aggregate/User/IUser'
import { Timestamps,  SoftDeletes } from '../../Base'
import { IComment } from './IComment'

export class Comment extends TimestampsAndSoftDeletes implements IComment {
  public id: string
  public name: string
  public from: IUser
  public message: string
  public parentId?: string
  public children?: IComment[]

  constructor (props: IComment) {
    super(props)
    this.id = props.id
    this.name = props.name
    this.from = props.from
    this.message = props.message
    this.parentId = props.parentId
    this.children = props.children
  }
}
