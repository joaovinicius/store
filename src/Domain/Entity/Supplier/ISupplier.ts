import { ITimestampsAndSoftDeletes } from '../../Base'
import { IContact } from '../Contact/IContact'

export interface ISupplier extends ITimestampsAndSoftDeletes {
  id: string,
  name: string,
  contact: IContact
}
