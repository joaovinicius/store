import faker from 'faker'
import { IConfirmationAccountToken } from '../../../../../src/Domain/Authentication/ConfirmationAccountToken/IConfirmationAccountToken'
import { ConfirmationAccountToken } from '../../../../../src/Domain/Authentication/ConfirmationAccountToken/ConfirmationAccountToken'

export const mock: IConfirmationAccountToken = new ConfirmationAccountToken({
  confirmationToken: faker.datatype.uuid()
})
