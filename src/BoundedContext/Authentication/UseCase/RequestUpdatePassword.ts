import { IAuthentication } from '../../../Domain/Authentication/Authentication/IAuthentication'
import { Repository } from '../Repository'
import { Command } from '../../Command'

export default class RequestUpdatePassword implements Command {
  private repository: Repository

  constructor (repository: Repository) {
    this.repository = repository
  }

  async execute (from: string, body: IAuthentication): Promise<boolean> {
    return await this.repository.requestUpdatePassword(from, body)
  }
}
