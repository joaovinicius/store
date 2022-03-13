import { State } from '../State/State'
import { StateFactory } from '../State/StateFactory'
import { City } from './City'

export function CityFactory (
  id: string = '',
  name: string = '',
  state: State = StateFactory()
): City {
  return new City({ id, name, state })
}
