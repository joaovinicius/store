import { Session } from './Session'

export function SessionFactory (authorization = ''): Session {
  return new Session({ authorization })
}
