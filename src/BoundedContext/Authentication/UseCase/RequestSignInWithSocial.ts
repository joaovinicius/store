import { Repository } from '../Repository'
import { ISocialAuthentication } from 'Domain/Authentication/SocialAuthentication/ISocialAuthentication'
import { ISession } from 'Domain/Authentication/Session/ISession'
import { Command } from 'BoundedContext/Command'

export default class RequestSignInWithSocial implements Command {
  private repository: Repository

  constructor(repository: Repository) {
    this.repository = repository
  }

  async execute(from: string, body: ISocialAuthentication): Promise<ISession> {
    return await this.repository.requestSignInWithSocial(from, body)
  }
}
