import { ITimestampsAndSoftDeletes } from '../../Base'

export interface IState extends ITimestampsAndSoftDeletes {
  id: string,
  name: string,
  abbr: string
}
