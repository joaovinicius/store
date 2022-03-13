import faker from 'faker'
import { ISession } from './ISession'
import { Session } from './Session'

export const SessionMock: ISession = new Session({
  authorization: faker.datatype.uuid()
})
