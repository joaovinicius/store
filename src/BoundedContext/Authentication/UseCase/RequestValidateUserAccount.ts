import { Repository } from '../Repository'
import { IConfirmationAccountToken } from '../../../Domain/Authentication/ConfirmationAccountToken/IConfirmationAccountToken'
import { Command } from '../../../Infrastructure/Support/Contracts/Command'

export default class RequestValidateUserICandidate implements Command {
  private repository: Repository

  constructor (repository: Repository) {
    this.repository = repository
  }

  async execute (from: string, body: IConfirmationAccountToken): Promise<boolean> {
    return await this.repository.requestValidateUserAccount(from, body)
  }
}
