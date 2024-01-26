import { IState, StateFactory } from '../State'
import { City } from './City'

export function CityFactory(
  id = undefined,
  name = '',
  state = StateFactory(),
  createdAt = new Date(),
  updatedAt = new Date(),
  deletedAt = undefined
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
