import { IUser } from '../../Aggregate/User/IUser'

export interface IComment {
  id: string
  name: string
  from: IUser
  message: string
  parent?: IComment
  children?: IComment[]
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}
