import { Address } from './Address'

export function AddressFactory (
  id: string = '',
  cep: string = '',
  neighborhood: string = '',
  street: string = '',
  number: string = '',
  complement: string = '',
  country: string = '',
  cityName: string = '',
  stateName: string = '',
  stateAbbr: string = '',
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
  deletedAt: Date | undefined = undefined
): Address {
  return new Address({
    id,
    cep,
    neighborhood,
    street,
    number,
    complement,
    country,
    cityName,
    stateName,
    stateAbbr,
    createdAt,
    updatedAt,
    deletedAt
  })
}
