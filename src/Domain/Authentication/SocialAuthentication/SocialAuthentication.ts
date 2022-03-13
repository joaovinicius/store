import { ISocialAuthentication } from './ISocialAuthentication'

export class SocialAuthentication implements ISocialAuthentication {
  public token: string

  constructor (props: ISocialAuthentication) {
    this.token = props.token
  }
}
