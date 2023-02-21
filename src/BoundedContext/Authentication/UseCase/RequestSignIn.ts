import { Repository } from '../Repository'
import { ISession } from 'Domain/Authentication/Session/ISession'
import { IAuthentication } from 'Domain/Authentication/Authentication/IAuthentication'
import { Command } from 'BoundedContext/Command'

export default class RequestSignIn implements Command {
  private repository: Repository

  constructor(repository: Repository) {
    this.repository = repository
  }

  async execute(from: string, body: IAuthentication): Promise<ISession> {
    return await this.repository.requestSignIn(from, body)
  }
}
