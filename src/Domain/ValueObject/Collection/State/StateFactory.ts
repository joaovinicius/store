import { State } from './State'

export function StateFactory (id: string = '', name: string = ''): State {
  return new State({ id, name })
}
