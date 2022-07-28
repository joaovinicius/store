import { ITimestampsAndSoftDeletes } from '../../Base'
import { IState } from '../State'

export interface ICity extends ITimestampsAndSoftDeletes {
  id: string,
  name: string,
  stateId: string,
  state?: IState,
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date
}
