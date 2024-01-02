import { Address } from './Address'
const now = new Date()

export function AddressFactory(
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
  createdAt: Date = now,
  updatedAt: Date = now,
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
