import { User } from "../../../Domain/Aggregate/User";
import { Contact } from "../../../Domain/Entity/Contact";

export interface Repository {
  updateContact(contact: Contact): User,
}
