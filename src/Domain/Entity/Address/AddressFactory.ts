import { Address } from './Address'
const now = new Date()

export function AddressFactory(
  id = undefined,
  cep = '',
  neighborhood = '',
  street = '',
  number = '',
  complement = '',
  country = '',
  cityName = '',
  stateName = '',
  stateAbbr = '',
  createdAt = now,
  updatedAt = now,
  deletedAt = undefined
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
