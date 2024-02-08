import { Repository } from '../Repository'
import { IAuthentication } from 'Domain/Authentication/Authentication/IAuthentication'
import { Command } from 'BoundedContext/Command'

export default class RequestSignIn implements Command {
  private repository: Repository

  constructor(repository: Repository) {
    this.repository = repository
  }

  async execute(body: IAuthentication): Promise<boolean> {
    return await this.repository.checkIfUserExists(body)
  }
}
