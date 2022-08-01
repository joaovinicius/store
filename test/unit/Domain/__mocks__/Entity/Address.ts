import faker from 'faker'
import { IAddress } from '../../../../../src/Domain/Entity/Address/IAddress'
import { Address } from '../../../../../src/Domain/Entity/Address/Address'
const now = new Date()

export const mock: IAddress = new Address({
  id: faker.datatype.uuid(),
  cep: faker.address.zipCode(),
  neighborhood: faker.address.streetName(),
  street: faker.address.streetName(),
  number: String(faker.datatype.number()),
  complement: faker.address.secondaryAddress(),
  country: faker.address.country(),
  cityName: faker.address.city(),
  stateName: faker.address.state(),
  stateAbbr: faker.address.stateAbbr(),
  createdAt: now,
  updatedAt: now
})
