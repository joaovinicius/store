import { ITimestampsAndSoftDeletes } from '../../Base'
import { IAddress } from '../Address/IAddress'

export interface IContact extends ITimestampsAndSoftDeletes {
  id: string,
  email: string,
  phone: string,
  addresses: IAddress[],
}
