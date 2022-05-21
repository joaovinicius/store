import { IUser } from '../../Aggregate/User/IUser'
import { ITimestampsAndSoftDeletes } from '../../Base'

export interface IComment extends ITimestampsAndSoftDeletes {
  id: string,
  name: string,
  from: IUser,
  message: string,
  parentId?: string,
  children?: IComment[]
}
