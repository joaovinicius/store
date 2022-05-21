import { IUser } from '../../Aggregate/User/IUser'
import { UserFactory } from '../../Aggregate/User/UserFactory'
import { Comment } from './Comment'
import { IComment } from './IComment'

export function CommentFactory (
  id = '',
  name = '',
  from: IUser = UserFactory(),
  message = '',
  parentId = '',
  children: IComment[] = [],
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
  deletedAt: Date | undefined = undefined
): Comment {
  return new Comment({
    id,
    name,
    from,
    message,
    parentId,
    children,
    createdAt,
    updatedAt,
    deletedAt
  })
}
