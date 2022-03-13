import { ILinkedinAccessToken } from '../../../Domain/Authentication/LinkedinAccessToken/ILinkedinAccessToken'
import { Repository } from '../Repository'
import { Command } from '../../../Infrastructure/Support/Contracts/Command'

export default class RequestLinkedinAccessToken implements Command {
  private repository: Repository

  constructor (repository: Repository) {
    this.repository = repository
  }

  async execute (from: string, params: ILinkedinAccessToken): Promise<string> {
    return await this.repository.requestLinkedinAccessToken(from, params)
  }
}
