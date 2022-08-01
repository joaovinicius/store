import { IState, StateFactory } from '../State'
import { City } from './City'

export function CityFactory(
  id = '',
  name = '',
  state: IState = StateFactory(),
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
  deletedAt: Date | undefined = undefined
): City {
  return new City({
    id,
    name,
    state,
    createdAt,
    updatedAt,
    deletedAt
  })
}
