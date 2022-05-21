import { ITimestampsAndSoftDeletes } from '../../Base'

export interface IPayment extends ITimestampsAndSoftDeletes {
  id: string,
  name: string
}
