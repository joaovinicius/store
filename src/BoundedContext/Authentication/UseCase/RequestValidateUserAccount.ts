import { Repository } from '../Repository'
import { IConfirmationAccountToken } from '../../../Domain/Authentication/ConfirmationAccount/IConfirmationAccountToken'
import { Command } from '../../Command'

export default class RequestValidateUserICandidate implements Command {
  private repository: Repository

  constructor (repository: Repository) {
    this.repository = repository
  }

  async execute (from: string, body: IConfirmationAccountToken): Promise<boolean> {
    return await this.repository.requestValidateUserAccount(from, body)
  }
}
