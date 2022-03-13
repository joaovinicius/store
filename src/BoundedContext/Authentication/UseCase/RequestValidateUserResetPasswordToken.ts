import { Repository } from '../Repository'
import { IResetPasswordToken } from '../../../Domain/Authentication/ResetPasswordToken/IResetPasswordToken'
import { Command } from '../../../Infrastructure/Support/Contracts/Command'

export default class RequestValidateUserResetPasswordToken implements Command {
  private repository: Repository

  constructor (repository: Repository) {
    this.repository = repository
  }

  async execute (from: string, body: IResetPasswordToken): Promise<boolean> {
    return await this.repository.requestValidateUserResetPasswordToken(from, body)
  }
}
