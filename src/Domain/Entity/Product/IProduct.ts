import { ITimestampsAndSoftDeletes } from '../../Base'

export interface IProduct extends ITimestampsAndSoftDeletes {
  id: string,
  name: string,
  description: string,
  brand: string,
  model: string
}
