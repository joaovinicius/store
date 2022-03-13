import { ICity } from '../../ValueObject/Collection/City/ICity'

export interface IAddress {
  id?: string,
  cep: string,
  city: ICity,
  street: string,
  number: string,
  neighborhood: string,
  complement?: string,
  name?: string
}
