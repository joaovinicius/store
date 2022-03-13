import { Contact } from "../Entity/Contact";

export interface User {
  id: string,
  name: string,
  password: string,
  contact: Contact,
}
