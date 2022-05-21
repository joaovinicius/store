import { IContact } from '../../Entity/Contact/IContact'
import { ITimestampsAndSoftDeletes } from '../../Base'

export interface IUser extends ITimestampsAndSoftDeletes {
  id: string,
  name: string,
  password: string,
  contact: IContact
}
