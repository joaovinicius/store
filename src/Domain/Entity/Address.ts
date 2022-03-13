export interface Address {
  id?: string,
  cep: string,
  neighborhood: string,
  street: string,
  number: string,
  complement?: string,
  country?: string,
  cityName: string,
  stateName: string
  stateAbbr: string
}
