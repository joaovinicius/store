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
  createdAt: Date = now,
  updatedAt: Date = now
): Comment {
  return new Comment({
    id,
    name,
    from,
    message,
    createdAt,
    updatedAt
  })
}
