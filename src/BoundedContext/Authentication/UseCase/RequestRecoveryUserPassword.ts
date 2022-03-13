import { Repository } from '../Repository'
import { IRecoveryPasswordToken } from '../../../Domain/Authentication/RecoveryPasswordToken/IRecoveryPasswordToken'
import { Command } from '../../../Infrastructure/Support/Contracts/Command'

export default class RequestRecoveryUserPassword implements Command {
  private repository: Repository

  constructor (repository: Repository) {
    this.repository = repository
  }

  async execute (from: string, body: IRecoveryPasswordToken): Promise<boolean> {
    return await this.repository.requestRecoveryUserPassword(from, body)
  }
}
