import { UserFactory } from '../../Aggregate/User/UserFactory'
import { Comment } from './Comment'

const now = new Date()

export function CommentFactory(
  id = undefined,
  name = '',
  from = UserFactory(),
  message = '',
  parent = undefined,
  children = undefined,
  createdAt = now,
  updatedAt = now,
  deletedAt = undefined 
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
