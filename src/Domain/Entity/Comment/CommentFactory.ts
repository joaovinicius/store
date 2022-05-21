import { IUser } from '../../Aggregate/User/IUser'
import { UserFactory } from '../../Aggregate/User/UserFactory'
import { Comment } from './Comment'
import { IComment } from './IComment'

export function CommentFactory (
  id: string = '',
  name: string = '',
  from: IUser = UserFactory(),
  message: string = '',
  parentId: string = '',
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
