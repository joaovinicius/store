import faker from 'faker'
import { ISession } from '../../../../../src/Domain/Authentication/Session/ISession'
import { Session } from '../../../../../src/Domain/Authentication/Session/Session'

export const mock: ISession = new Session({
  authorization: faker.datatype.uuid()
})
