import { ITimestampsAndSoftDeletes } from '../../Base'

export interface IAttribute extends ITimestampsAndSoftDeletes {
  id: string,
  name: string
}
