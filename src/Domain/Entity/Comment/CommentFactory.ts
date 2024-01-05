import { IUser } from '../../Aggregate/User/IUser'
import { UserFactory } from '../../Aggregate/User/UserFactory'
import { Comment } from './Comment'
import { IComment } from './IComment'

const now = new Date()

export function CommentFactory(
  id = '',
  name = '',
  from: IUser = UserFactory(),
  message = '',
  parent: IComment | undefined = undefined,
  children: IComment[] | undefined = undefined,
  createdAt: Date = now,
  updatedAt: Date = now,
  deletedAt: Date | undefined = undefined 
): Comment {
  return new Comment({
    id,
    name,
    from,
    message,
    parent,
    children,
    createdAt,
    updatedAt, 
    deletedAt
  })
}
