import { ILinkedinAccessToken } from './ILinkedinAccessToken'

export class LinkedinAccessToken implements ILinkedinAccessToken {
  public grantType: string
  public code: string
  public clientId: string
  public redirectUri: string
  public clientSecret: string

  constructor (props: ILinkedinAccessToken) {
    this.grantType = props.grantType
    this.code = props.code
    this.clientId = props.clientId
    this.redirectUri = props.redirectUri
    this.clientSecret = props.clientSecret
  }
}
