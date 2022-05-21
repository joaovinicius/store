import { ITimestampsAndSoftDeletes } from '../../Base'

export interface IBilling extends ITimestampsAndSoftDeletes {
  id: string,
  name: string
}
