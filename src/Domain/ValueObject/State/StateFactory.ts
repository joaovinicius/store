import { State } from './State'

export function StateFactory (
  id: string = '',
  name: string = '',
  abbr: string = '',
  createdAt: Date = new Date(),
  updatedAt: Date = new Date(),
  deletedAt: Date | undefined = undefined
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
