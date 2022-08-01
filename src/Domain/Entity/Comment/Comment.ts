import { IUser } from '../../Aggregate/User/IUser'
import { IComment } from './IComment'

export class Comment implements IComment {
  public id: string
  public name: string
  public from: IUser
  public message: string
  public parent?: IComment
  public children?: IComment[]
  public createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date

  constructor(props: IComment) {
    this.id = props.id
    this.name = props.name
    this.from = props.from
    this.message = props.message
    this.parent = props.parent
    this.children = props.children
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}
