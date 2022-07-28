export interface IAddress {
  id?: string,
  cep: string,
  neighborhood: string,
  street: string,
  number: string,
  complement?: string,
  country?: string,
  cityName: string,
  stateName: string,
  stateAbbr: string,
  createdAt: Date,
  updatedAt: Date,
  deletedAt?: Date
}
