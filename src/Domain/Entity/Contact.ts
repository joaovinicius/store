import { Address } from "./Address";

export interface Contact {
  id: string,
  email: string,
  phone: string,
  addresses: Address[],
}
