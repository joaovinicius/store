import { ITimestampsAndSoftDeletes } from '../../Base'

export interface IAddress extends ITimestampsAndSoftDeletes {
  id?: string,
  cep: string,
  neighborhood: string,
  street: string,
  number: string,
  complement?: string,
  country?: string,
  cityName: string,
  stateName: string,
  stateAbbr: string
}
