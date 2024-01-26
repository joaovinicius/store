import { State } from './State'

export function StateFactory (
  id = undefined,
  name = '',
  abbr = '',
  createdAt = new Date(),
  updatedAt = new Date(),
  deletedAt = undefined
): State {
  return new State({
    id,
    name,
    abbr,
    createdAt,
    updatedAt,
    deletedAt
  })
}
