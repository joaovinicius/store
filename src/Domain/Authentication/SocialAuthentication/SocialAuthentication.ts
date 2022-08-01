import { ISocialAuthentication } from './ISocialAuthentication'

export class SocialAuthentication implements ISocialAuthentication {
  public token: string
  public name: string

  constructor(props: ISocialAuthentication) {
    this.token = props.token
    this.name = props.name
  }
}
