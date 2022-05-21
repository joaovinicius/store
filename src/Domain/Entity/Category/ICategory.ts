import { ITimestampsAndSoftDeletes } from '../../Base'

export interface ICategory extends ITimestampsAndSoftDeletes {
  id: string,
  name: string,
  parentId?: string,
  children?: ICategory[]
}
