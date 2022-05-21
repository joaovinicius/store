import { ITimestampsAndSoftDeletes } from '../../Base'

export interface IShipping extends ITimestampsAndSoftDeletes {
  id: string,
  name: string
}
