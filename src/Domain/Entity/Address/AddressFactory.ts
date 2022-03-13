import { Address } from './Address'
import { City } from '../../ValueObject/Collection/City/City'
import { CityFactory } from '../../ValueObject/Collection/City/CityFactory'

export function AddressFactory (
  id: string = '',
  cep: string = '',
  city: City = CityFactory(),
  street: string = '',
  number: string = '',
  neighborhood: string = '',
  complement: string = '',
  name: string = ''
): Address {
  return new Address({
    id,
    cep,
    city,
    street,
    number,
    neighborhood,
    complement,
    name
  })
}
