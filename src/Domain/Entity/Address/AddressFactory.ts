import { Address } from './Address'

export function AddressFactory (
  id = '',
  cep = '',
  neighborhood = '',
  street = '',
  number = '',
  complement = '',
  country = '',
  cityName = '',
  stateName = '',
  stateAbbr = '',
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
