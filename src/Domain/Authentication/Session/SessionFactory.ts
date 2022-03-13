import { Session } from './Session'

export function SessionFactory (authorization: string = ''): Session {
  return new Session({ authorization })
}
