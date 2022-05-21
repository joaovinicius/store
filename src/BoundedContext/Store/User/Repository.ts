import { IUser } from '../../../Domain/Aggregate/User'
import { Contact } from '../../../Domain/Entity/Contact'

export interface Repository {
  requestCreate(user: IUser): Promise<IUser>,
  requestUpdateContact(contact: Contact): IUser,
}
