import { User } from '../Aggregate/User'

export interface Comment {
  id: string,
  name: string,
  from: User,
  createdAt: string,
  updatedAt: string,
  message: string,
  parentId?: string,
  children?: Comment[]
}
